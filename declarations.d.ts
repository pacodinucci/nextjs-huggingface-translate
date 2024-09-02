// src/types/declarations.d.ts

declare module "react-speech-recognition" {
  export interface SpeechRecognitionOptions {
    continuous?: boolean;
    // Puedes agregar más opciones si es necesario
  }

  export function useSpeechRecognition(): {
    transcript: string;
    listening: boolean;
    resetTranscript: () => void;
  };

  export function startListening(options?: SpeechRecognitionOptions): void;
  export function stopListening(): void;
  export function abortListening(): void; // Otra función que puede estar disponible

  // Puedes agregar más tipos o funciones aquí según sea necesario
}
