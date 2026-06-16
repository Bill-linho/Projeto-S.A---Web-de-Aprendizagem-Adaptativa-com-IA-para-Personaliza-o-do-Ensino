import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { perguntarGemini } from "../../services/geminiService.js";

export default function Chat() {
  const [texto, setTexto] = useState("");
  const [mensagens, setMensagens] = useState([]);
  const [loading, setLoading] = useState(false);

  async function enviarMensagem() {
    if (!texto.trim()) return;

    const pergunta = texto;

    setMensagens((prev) => [
      ...prev,
      {
        texto: pergunta,
        tipo: "usuario",
      },
    ]);

    setTexto("");
    setLoading(true);

    try {
      const resposta = await perguntarGemini(pergunta);

      setMensagens((prev) => [
        ...prev,
        {
          texto: resposta,
          tipo: "ia",
        },
      ]);
    } catch (erro) {
      console.error(erro);

      setMensagens((prev) => [
        ...prev,
        {
          texto: "Erro ao conversar com a IA.",
          tipo: "ia",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      enviarMensagem();
    }
  }

  return (
    <div className="chat-container">
      <h2>MentorIA</h2>

      <div className="chat-messages">
        {mensagens.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.tipo === "usuario"
                ? "message-user"
                : "message-ai"
            }`}
          >
            <ReactMarkdown>
              {msg.texto}
            </ReactMarkdown>
          </div>
        ))}

        {loading && (
          <div className="message message-ai">
            Digitando...
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={texto}
          placeholder="Digite sua pergunta..."
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={enviarMensagem}>
          Enviar
        </button>
      </div>
    </div>
  );
}