import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

const TITLE = "Política de Privacidade — Khaliq Systems";
const DESCRIPTION =
  "Política de Privacidade da Khaliq Systems (Sofia, recepcionista de IA no WhatsApp) — LGPD, direitos do titular e como solicitar a exclusão dos seus dados. Privacy Policy for Khaliq Systems.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://khaliqsystems.com/privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://khaliqsystems.com/privacidade" }],
  }),
  component: Page,
});

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="scroll-mt-28">
      <h2 className="mt-12 text-xl font-bold tracking-[-0.025em] text-foreground sm:text-2xl">
        {n}. {title}
      </h2>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <FloatingWhatsApp />

      <main>
        <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Khaliq Systems</p>
            <h1 className="display mt-6 text-[2.4rem] leading-[1.06] sm:text-6xl">
              <span className="text-gradient-fade">Política de Privacidade</span>
            </h1>

            <nav aria-label="Idiomas" className="mt-10 flex items-center gap-4 text-sm">
              <a
                href="#portugues"
                className="text-primary underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Português
              </a>
              <a
                href="#english"
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                English
              </a>
            </nav>

            <article
              id="portugues"
              className="mt-14 scroll-mt-28 border-t border-hairline pt-4"
              lang="pt-BR"
            >
              <p className="text-sm font-medium text-foreground">
                Política de Privacidade — Khaliq Systems
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Última atualização: 27 de outubro de 2026
              </p>

              <Section n="1" title="Quem somos">
                <p>
                  Khaliq Systems (MEI, CNPJ 66.551.503/0001-63), São Paulo, Brasil, desenvolve a
                  Sofia, uma recepcionista de IA que atende pelo WhatsApp em nome de empresas de
                  diferentes setores. Contato: khaliqsystems@gmail.com.
                </p>
              </Section>

              <Section n="2" title="Nosso papel">
                <p>
                  Quando a Sofia atende os clientes de uma empresa, a empresa decide por que e como
                  os dados são usados (controladora). A Khaliq Systems trata os dados em nome da
                  empresa (operadora), conforme a Lei Geral de Proteção de Dados (LGPD, Lei
                  13.709/2018). Para os dados de contato de empresas e interessados que falam
                  diretamente conosco, a Khaliq Systems é a controladora.
                </p>
              </Section>

              <Section n="3" title="Quais dados tratamos">
                <Bullets
                  items={[
                    "Número de telefone do WhatsApp e nome de perfil exibido no WhatsApp.",
                    "O conteúdo das mensagens e arquivos enviados na conversa (por exemplo, perguntas, preferências de horário, imagens ou áudios).",
                    "Informações de agendamento fornecidas na conversa (por exemplo, nome, serviço desejado, data e hora).",
                    "Data e hora das mensagens e o histórico da conversa.",
                  ]}
                />
                <p>
                  Pedimos que você não envie documentos de identidade, senhas ou números de cartão
                  pelo WhatsApp.
                </p>
              </Section>

              <Section n="4" title="Para que usamos os dados">
                <Bullets
                  items={[
                    "Responder às mensagens e ajudar a agendar atendimentos.",
                    "Avisar a equipe da empresa quando o cliente pede para falar com uma pessoa ou quando a situação exige atendimento humano.",
                    "Enviar mensagens de acompanhamento, quando permitido pelas regras do WhatsApp e pela empresa.",
                    "Manter a segurança, corrigir erros e melhorar o serviço.",
                  ]}
                />
              </Section>

              <Section n="5" title="Com quem compartilhamos">
                <Bullets
                  items={[
                    "Meta Platforms (WhatsApp Business Platform / Cloud API) e provedores de mensagens, para enviar e receber as mensagens.",
                    "Provedor de inteligência artificial: o texto das mensagens é enviado a um serviço de IA para gerar as respostas.",
                    "Provedores de infraestrutura (hospedagem em nuvem, banco de dados e automação) que armazenam e processam os dados para nós.",
                    "Ferramentas de agenda, quando o cliente escolhe um horário.",
                    "A empresa atendida e sua equipe.",
                    "Autoridades, quando exigido por lei.",
                  ]}
                />
                <p>
                  Não vendemos dados pessoais. Alguns prestadores podem estar fora do Brasil; nesses
                  casos, buscamos garantias adequadas, conforme a LGPD.
                </p>
              </Section>

              <Section n="6" title="Por quanto tempo guardamos">
                <p>
                  Guardamos os dados pelo tempo necessário para prestar o serviço à empresa e cumprir
                  obrigações legais. Depois disso, eliminamos ou anonimizamos os dados, ou a pedido,
                  conforme a seção 7.
                </p>
              </Section>

              <Section n="7" title="Seus direitos">
                <p>
                  Conforme a LGPD, você pode pedir: confirmação de que tratamos seus dados, acesso,
                  correção, anonimização, bloqueio ou eliminação, portabilidade, informação sobre
                  compartilhamento e revogação do consentimento. Envie o pedido para
                  khaliqsystems@gmail.com. Podemos pedir informações para confirmar quem você é. Se a
                  Sofia atende você em nome de uma empresa, podemos encaminhar o pedido à empresa.
                </p>
              </Section>

              <Section n="8" title="Como pedir a exclusão dos seus dados">
                <p>
                  Envie um e-mail para khaliqsystems@gmail.com com o assunto “Exclusão de dados”,
                  informando o número de WhatsApp usado na conversa. Respondemos o pedido e, quando
                  cabível, eliminamos o histórico da conversa associado a esse número. Alguns dados
                  podem ser mantidos quando a lei exigir.
                </p>
              </Section>

              <Section n="9" title="Segurança">
                <p>
                  Usamos conexões criptografadas e controle de acesso aos sistemas. Nenhum sistema é
                  totalmente livre de riscos. Se houver um incidente que afete seus dados, avisaremos
                  conforme a lei.
                </p>
              </Section>

              <Section n="10" title="Crianças">
                <p>
                  O serviço é voltado a pessoas que contatam empresas pelo WhatsApp. Não coletamos
                  dados de crianças de forma intencional.
                </p>
              </Section>

              <Section n="11" title="Mudanças nesta política">
                <p>
                  Podemos atualizar esta política. A data de atualização no topo mostra a versão
                  atual.
                </p>
              </Section>
            </article>

            <article
              id="english"
              className="mt-20 scroll-mt-28 border-t border-hairline pt-4"
              lang="en"
            >
              <p className="text-sm font-medium text-foreground">Privacy Policy — Khaliq Systems</p>
              <p className="mt-1 text-sm text-muted-foreground">Last updated: 27 October 2026</p>

              <Section n="1" title="Who we are">
                <p>
                  Khaliq Systems (MEI, CNPJ 66.551.503/0001-63), São Paulo, Brazil, builds Sofia, an
                  AI receptionist that answers on WhatsApp on behalf of businesses in different
                  industries. Contact: khaliqsystems@gmail.com.
                </p>
              </Section>

              <Section n="2" title="Our role">
                <p>
                  When Sofia answers a business's customers, the business decides why and how the
                  data is used (controller). Khaliq Systems processes the data on the business's
                  behalf (operator) under Brazil&apos;s General Data Protection Law (LGPD, Law
                  13,709/2018). For the contact details of businesses and prospects who talk to us
                  directly, Khaliq Systems is the controller.
                </p>
              </Section>

              <Section n="3" title="Data we process">
                <Bullets
                  items={[
                    "WhatsApp phone number and the profile name shown on WhatsApp.",
                    "The content of messages and files sent in the chat (for example questions, time preferences, images or voice notes).",
                    "Booking information given in the chat (for example name, requested service, date and time).",
                    "Message timestamps and conversation history.",
                  ]}
                />
                <p>
                  Please do not send ID documents, passwords or card numbers over WhatsApp.
                </p>
              </Section>

              <Section n="4" title="How we use the data">
                <Bullets
                  items={[
                    "To reply to messages and help book appointments.",
                    "To alert the business's staff when a customer asks to speak to a person or when a situation needs a human.",
                    "To send follow-up messages, where WhatsApp rules and the business allow it.",
                    "To keep the service secure, fix errors and improve it.",
                  ]}
                />
              </Section>

              <Section n="5" title="Who we share it with">
                <Bullets
                  items={[
                    "Meta Platforms (WhatsApp Business Platform / Cloud API) and messaging providers, to send and receive messages.",
                    "An artificial intelligence provider: message text is sent to an AI service to write replies.",
                    "Infrastructure providers (cloud hosting, database and automation) that store and process data for us.",
                    "Scheduling tools, when a customer picks a time slot.",
                    "The business being served and its staff.",
                    "Authorities, when required by law.",
                  ]}
                />
                <p>
                  We do not sell personal data. Some providers may be outside Brazil; in that case we
                  seek appropriate safeguards as required by the LGPD.
                </p>
              </Section>

              <Section n="6" title="How long we keep it">
                <p>
                  We keep data for as long as needed to provide the service to the business and meet
                  legal obligations. After that we delete or anonymise it, or do so on request as
                  described in section 7.
                </p>
              </Section>

              <Section n="7" title="Your rights">
                <p>
                  Under the LGPD you can ask for: confirmation that we process your data, access,
                  correction, anonymisation, blocking or deletion, portability, information about
                  sharing, and withdrawal of consent. Send your request to khaliqsystems@gmail.com.
                  We may ask for details to confirm who you are. If Sofia serves you on behalf of a
                  business, we may forward the request to the business.
                </p>
              </Section>

              <Section n="8" title="How to request deletion of your data">
                <p>
                  Email khaliqsystems@gmail.com with the subject “Data deletion” and the WhatsApp
                  number used in the chat. We will answer the request and, where applicable, delete
                  the conversation history linked to that number. Some data may be kept where the law
                  requires it.
                </p>
              </Section>

              <Section n="9" title="Security">
                <p>
                  We use encrypted connections and access control on our systems. No system is
                  completely risk-free. If an incident affects your data, we will notify you as the
                  law requires.
                </p>
              </Section>

              <Section n="10" title="Children">
                <p>
                  The service is meant for people contacting businesses on WhatsApp. We do not
                  intentionally collect children&apos;s data.
                </p>
              </Section>

              <Section n="11" title="Changes to this policy">
                <p>
                  We may update this policy. The date at the top shows the current version.
                </p>
              </Section>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
