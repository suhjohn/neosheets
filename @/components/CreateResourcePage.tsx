// import {
//   AnthropicProvider,
//   BedrockProvider,
//   GeminiProvider,
//   GroqProvider,
//   OpenAIProvider,
//   OpenRouterProvider,
//   TogetherProvider,
// } from "@/fixtures";
// import { useCreateResource } from "@/hooks/useSecretKeys";
// import { cn, slugify } from "@/lib/utils";
// import {
//   type AnthropicResource,
//   type BedrockResource,
//   type GeminiResource,
//   type GeneralForm,
//   type GroqResource,
//   type OpenAIResource,
//   type OpenRouterResource,
//   type TogetherResource,
// } from "@/types/secret";
// import { Link } from "@remix-run/react";
// import { ChevronLeft } from "lucide-react";
// import { createElement, type FC, useEffect, useState } from "react";
// import { AnthropicForm } from "./resource/AnthropicForm";
// import { BedrockForm } from "./resource/BedrockForm";
// import { GeminiForm } from "./resource/GeminiForm";
// import { GroqForm } from "./resource/GrokForm";
// import { OpenAIForm } from "./resource/OpenAIForm";
// import { OpenRouterForm } from "./resource/OpenRouterForm";
// import { TogetherForm } from "./resource/TogetherForm";
// import { ClosedNavigation } from "./SideNavigation";
// import { Button } from "./ui/button";

// const NameToForm = {
//   [slugify(OpenAIProvider.name)]: OpenAIForm,
//   [slugify(AnthropicProvider.name)]: AnthropicForm,
//   [slugify(BedrockProvider.name)]: BedrockForm,
//   [slugify(GeminiProvider.name)]: GeminiForm,
//   [slugify(GroqProvider.name)]: GroqForm,
//   [slugify(OpenRouterProvider.name)]: OpenRouterForm,
//   [slugify(TogetherProvider.name)]: TogetherForm,
// };

// const NameToProvider = {
//   [slugify(OpenAIProvider.name)]: OpenAIProvider,
//   [slugify(AnthropicProvider.name)]: AnthropicProvider,
//   [slugify(BedrockProvider.name)]: BedrockProvider,
//   [slugify(GeminiProvider.name)]: GeminiProvider,
//   [slugify(GroqProvider.name)]: GroqProvider,
//   [slugify(OpenRouterProvider.name)]: OpenRouterProvider,
//   [slugify(TogetherProvider.name)]: TogetherProvider,
// };

// type CreateResourcePageProps = {
//   name: string;
// };

// export const CreateResourcePage: FC<CreateResourcePageProps> = ({ name }) => {
//   const [saved, setSaved] = useState(false);
//   const { mutateAsync } = useCreateResource();
//   useEffect(() => {
//     if (saved) {
//       const timer = setTimeout(() => setSaved(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [saved]);
//   const handleSubmit = async (
//     data: GeneralForm &
//       (
//         | OpenAIResource
//         | AnthropicResource
//         | BedrockResource
//         | GeminiResource
//         | GroqResource
//         | OpenRouterResource
//         | TogetherResource
//       )
//   ) => {
//     await mutateAsync({
//       providerId: NameToProvider[name].id,
//       name: data.name,
//       description: data.description,
//       body: data,
//     });
//     setSaved(true);
//   };
//   return (
//     <div className="flex h-[100dvh] w-full">
//       <ClosedNavigation />
//       <div className="w-full flex justify-center">
//         <div
//           className={cn(
//             "max-w-screen-lg",
//             "flex-1",
//             "p-4",
//             "pt-16",
//             "md:p-16",
//             "gap-4",
//             "flex",
//             "flex-col"
//           )}
//         >
//           <div className="flex flex-col gap-4 items-start w-full flex-1">
//             <Button variant="icon" className="w-auto h-auto p-0" asChild>
//               <Link to="/resources/new" className="flex items-center gap-2">
//                 <ChevronLeft size={16} />
//                 <p>Select a resource</p>
//               </Link>
//             </Button>
//             {NameToForm[name] === undefined ||
//             NameToProvider[name] === undefined ? (
//               <p className="text-red-500">{`Form not found for provider ${name}`}</p>
//             ) : (
//               <div className="flex flex-col gap-4 w-full">
//                 <div className="flex flex-col gap-2">
//                   <div className="flex w-full items-center gap-4">
//                     <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-white">
//                       <img
//                         src={NameToProvider[name].logoUrl}
//                         className="max-h-10 max-w-10 object-contain rounded-md"
//                         alt="Provider Logo"
//                       />
//                     </div>
//                     <h1 className="text-lg">
//                       {name.charAt(0).toUpperCase() + name.slice(1)}
//                     </h1>
//                     {saved && <p className="text-xs text-stone-500">Saved</p>}
//                   </div>
//                 </div>
//                 {createElement(NameToForm[name], {
//                   onSubmit: handleSubmit,
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
