import { ColumnData } from "@/types/sheet";
import { updateCellFormula } from "./formula";

describe("updateCellFormula", () => {
  let initialData: ColumnData[];

  beforeEach(() => {
    initialData = [
      {
        0: { value: 1, display: "hide", formula: "1" },
        1: { value: 2, display: "hide", formula: "2" },
      },
      {
        0: { value: 3, display: "hide", formula: "3" },
        1: { value: 4, display: "hide", formula: "4" },
      },
    ];
  });

  test("should update cell value and formula", () => {
    const newData = updateCellFormula({
      prevData: initialData,
      colIndex: 0,
      rowIndex: 0,
      newFormula: "=5",
      functionBindings: {},
    });

    expect(newData[0][0]).toEqual({
      value: 5,
      display: "hide",
      formula: "=5",
      dependencies: new Set(),
    });
  });

  test("should handle cell references", () => {
    const newData = updateCellFormula({
      prevData: initialData,
      colIndex: 0,
      rowIndex: 2,
      newFormula: "=A1+B1",
      functionBindings: {},
    });

    expect(newData[0][2]).toEqual({
      value: 4,
      display: "hide",
      formula: "=A1+B1",
      dependencies: new Set(["A1", "B1"]),
    });
  });

  test("should update dependencies", () => {
    const newData = updateCellFormula({
      prevData: initialData,
      colIndex: 0,
      rowIndex: 2,
      newFormula: "=A1+B1",
      functionBindings: {},
    });

    expect(newData[0][0].dependencies).toContain("A3");
    expect(newData[1][0].dependencies).toContain("A3");
  });

  test("should remove old dependencies", () => {
    let newData = updateCellFormula({
      prevData: initialData,
      colIndex: 0,
      rowIndex: 2,
      newFormula: "=A1+B1",
      functionBindings: {},
    });

    newData = updateCellFormula({
      prevData: newData,
      colIndex: 0,
      rowIndex: 2,
      newFormula: "=A1",
      functionBindings: {},
    });

    expect(newData[0][0].dependencies).toContain("A3");
    expect(newData[1][0].dependencies).not.toContain("A3");
  });

  test("should handle range references", () => {
    const newData = updateCellFormula({
      prevData: initialData,
      colIndex: 0,
      rowIndex: 2,
      newFormula: "=SUM(A1:B2)",
      functionBindings: {},
    });

    expect(newData[0][2]).toEqual({
      value: 10,
      display: "hide",
      formula: "=SUM(A1:B2)",
      dependencies: new Set(["A1", "A2", "B1", "B2"]),
    });
  });

  test("should handle circular references", () => {
    const newData = updateCellFormula({
      prevData: initialData,
      colIndex: 0,
      rowIndex: 0,
      newFormula: "=A1+1",
      functionBindings: {},
    });

    expect(newData[0][0]).toEqual({
      value: "#REF!",
      display: "hide",
      formula: "=A1+1",
      error: "circular_dependency",
      dependencies: new Set(["A1"]),
    });
  });

  test("should update display property", () => {
    const newData = updateCellFormula({
      prevData: initialData,
      colIndex: 0,
      rowIndex: 0,
      newFormula: "=5",
      display: "wrap",
      functionBindings: {},
    });

    expect(newData[0][0].display).toBe("wrap");
  });
});
