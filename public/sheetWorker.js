// public/sheetWorker.js

importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js');

// Initialize localForage instance
const localForageInstance = localforage.createInstance({
  name: 'NeoSheetsStore',
  version: 1.0,
  storeName: 'db',
  driver: [localforage.INDEXEDDB],
});

/**
 * Function to update a specific sheet within a spreadsheet.
 * @param {string} spreadsheetId - The ID of the spreadsheet.
 * @param {object} sheet - The sheet object to update.
 */
const updateSheetInSpreadsheet = async ({ spreadsheetId, sheet }) => {
  try {
    // Retrieve all spreadsheets
    const spreadsheets = (await localForageInstance.getItem('spreadsheets')) || [];

    // Find the spreadsheet to update
    const spreadsheetIndex = spreadsheets.findIndex(spread => spread.id === spreadsheetId);
    if (spreadsheetIndex === -1) {
      throw new Error(`Spreadsheet with ID ${spreadsheetId} not found.`);
    }

    // Find the sheet within the spreadsheet
    const sheetIndex = spreadsheets[spreadsheetIndex].sheets.findIndex(s => s.id === sheet.id);
    if (sheetIndex === -1) {
      throw new Error(`Sheet with ID ${sheet.id} not found in Spreadsheet ${spreadsheetId}.`);
    }

    // Update the sheet
    spreadsheets[spreadsheetIndex].sheets[sheetIndex] = sheet;
    spreadsheets[spreadsheetIndex].lastOpenedAt = new Date().toISOString();

    // Save the updated spreadsheets array
    await localForageInstance.setItem('spreadsheets', spreadsheets);
    // console.log(`Sheet ${sheet.id} in Spreadsheet ${spreadsheetId} updated successfully.`);
  } catch (error) {
    console.error('Error updating sheet in spreadsheet:', error);
    throw error;
  }
};

/**
 * Function to capture events for undo functionality within a spreadsheet's sheet.
 * @param {string} spreadsheetId - The ID of the spreadsheet.
 * @param {object} action - The action to capture.
 */
const captureEventInSpreadsheet = async ({ spreadsheetId, sheetId, action }) => {
  try {
    const eventKey = `spreadsheetEvents:${spreadsheetId}:${sheetId}`;
    let events = (await localForageInstance.getItem(eventKey)) || [];
    const eventId = Date.now(); // Simple unique ID
    events.push({ eventId, action });
    await localForageInstance.setItem(eventKey, events);
    // console.log(`Event captured for sheet ${sheetId} in Spreadsheet ${spreadsheetId}:`, action);
  } catch (error) {
    console.error('Error capturing event in spreadsheet:', error);
    throw error;
  }
};

// Listen for messages from the main thread
self.addEventListener('message', async (event) => {
  const { type, payload } = event.data;

  switch (type) {
    case 'SAVE_SHEET': {
      try {
        const { spreadsheetId, sheet } = payload;
        await updateSheetInSpreadsheet({ spreadsheetId, sheet });
        self.postMessage({ type: 'SAVE_SUCCESS', payload: { spreadsheetId, sheetId: sheet.id } });
      } catch (error) {
        self.postMessage({ type: 'SAVE_FAILURE', payload: { spreadsheetId: payload.spreadsheetId, error: error.message } });
      }
      break;
    }
    case 'CAPTURE_EVENT': {
      try {
        const { spreadsheetId, sheetId, action } = payload;
        await captureEventInSpreadsheet({ spreadsheetId, sheetId, action });
        self.postMessage({ type: 'EVENT_CAPTURED', payload: { spreadsheetId, sheetId, action } });
      } catch (error) {
        self.postMessage({ type: 'EVENT_CAPTURE_FAILURE', payload: { spreadsheetId: payload.spreadsheetId, sheetId: payload.sheetId, error: error.message } });
      }
      break;
    }
    default:
      console.warn(`Unknown message type: ${type}`);
  }
});
