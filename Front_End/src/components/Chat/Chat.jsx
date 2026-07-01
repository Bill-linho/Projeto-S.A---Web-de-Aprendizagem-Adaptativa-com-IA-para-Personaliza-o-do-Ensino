import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { getMessages, sendMessage } from "../../services/chatService.js";
import LogoRobo from "../Logo/roboManeiro.jsx";
import '../style/Chat.css'

export default function Chat() {
  const [texto, setTexto] = useState("");
  const [mensagens, setMensagens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregarMensagens() {
      try {
        const response = await getMessages();
        const historico = response.data || [];

        setMensagens(
          historico.map((mensagem) => ({
            texto: mensagem.texto,
            tipo: mensagem.autor === "usuario" ? "usuario" : "gemini",
          }))
        );
      } catch (erro) {
        console.error("Erro ao carregar mensagens:", erro);
      }
    }

    carregarMensagens();
  }, []);

  async function enviarMensagem() {
    if (!texto.trim()) return;

    const pergunta = texto.trim();
    if (!pergunta) return;

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
      const response = await sendMessage({ pergunta });
      const resposta = response.data?.resposta || "Erro ao conversar com a IA.";

      setMensagens((prev) => [
        ...prev,
        {
          texto: resposta,
          tipo: "gemini",
        },
      ]);
    } catch (erro) {
      console.error(erro);

      setMensagens((prev) => [
        ...prev,
        {
          texto: "Erro ao conversar com a IA.",
          tipo: "gemini",
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

      <h2><LogoRobo width="50px" height="50px" />Mentor <span id="mensagem">IA+ </span></h2>


      <div className="chat-messages">
        {mensagens.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.tipo === "usuario"
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