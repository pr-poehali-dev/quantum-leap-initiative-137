import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое мессенджер Max и зачем там бот?",
      answer:
        "Max — российский мессенджер от VK с десятками миллионов пользователей. Боты в Max позволяют вашим клиентам общаться с бизнесом прямо в привычном приложении: заказывать, записываться, задавать вопросы — без звонков и сайтов.",
    },
    {
      question: "Сколько стоит разработка бота?",
      answer:
        "Стоимость зависит от функционала. Простой бот для записи или FAQ — от 15 000 ₽. Мини-приложение с каталогом и оплатой — от 40 000 ₽. Точную цену обсудим после короткого созвона.",
    },
    {
      question: "Как долго делается бот?",
      answer:
        "Базовый бот готов за 3–5 рабочих дней. Полноценное мини-приложение — 7–14 дней. Всё зависит от сложности задачи.",
    },
    {
      question: "Нужно ли мне разбираться в технологиях?",
      answer:
        "Нет, совсем не нужно. Вы просто рассказываете, что должен делать бот, — мы делаем всё остальное: разработку, настройку, публикацию. Вы получаете готовый работающий инструмент.",
    },
    {
      question: "Можно ли доработать бота после запуска?",
      answer:
        "Да, конечно. Мы сопровождаем проекты после сдачи: добавляем новые функции, правим тексты, подключаем дополнительные сервисы по мере роста вашего бизнеса.",
    },
    {
      question: "Как начать работу?",
      answer:
        "Напишите нам или оставьте заявку — мы свяжемся, обсудим задачу и предложим решение. Никаких предоплат до согласования технического задания.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на популярные вопросы про ботов и приложения для Max.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}