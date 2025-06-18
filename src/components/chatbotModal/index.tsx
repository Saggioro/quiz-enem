import { FC, useState, useEffect, MouseEvent } from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  LoadingSpinner,
  Content,
  ErrorMessage,
} from "./styles";
import api from "@/api/api";
import { QuestionType } from "@/store/quizStore";

interface ChatBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: QuestionType;
}

interface ApiResponse {
  response: string;
}

const ChatBotModal: FC<ChatBotModalProps> = ({ isOpen, onClose, question }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      const fetchExplanation = async () => {
        setIsLoading(true);
        setError("");
        setAiResponse("");

        try {
          const response = await api.post<ApiResponse>("/ai/askquestion", {
            prompt: JSON.stringify(question),
          });
          console.log(response);
          setAiResponse(response.data.response);
        } catch (err: unknown) {
          console.error("Erro ao buscar explicação da IA:", err);
          setError(
            "Desculpe, não foi possível obter a explicação no momento. Tente novamente."
          );
        } finally {
          setIsLoading(false);
        }
      };

      fetchExplanation();
    }
  }, [isOpen, question]);

  if (!isOpen) return null;

  const handleContainerClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={handleContainerClick}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>AprendeAi+</h2>

        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {aiResponse && <Content>{aiResponse}</Content>}
      </ModalContainer>
    </Overlay>
  );
};

export default ChatBotModal;
