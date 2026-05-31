import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Боты под ваш бизнес",
    description: "Создаём чат-ботов для Max под любые задачи: приём заявок, запись клиентов, ответы на вопросы 24/7.",
    icon: "brain",
    badge: "Боты",
  },
  {
    title: "Мини-приложения",
    description: "Полноценные приложения внутри Max: каталоги товаров, личные кабинеты, формы заказов и оплаты.",
    icon: "globe",
    badge: "Приложения",
  },
  {
    title: "Автоматизация продаж",
    description: "Бот сам отвечает клиентам, берёт заказы и отправляет уведомления — без участия менеджера.",
    icon: "zap",
    badge: "Авто",
  },
  {
    title: "Интеграции с сервисами",
    description: "Подключаем вашу CRM, Google Таблицы, 1С или любую систему учёта прямо к боту.",
    icon: "link",
    badge: "Связь",
  },
  {
    title: "Быстрый запуск",
    description: "От идеи до рабочего бота за 3–7 дней. Понятный процесс, никакого технического жаргона.",
    icon: "target",
    badge: "Быстро",
  },
  {
    title: "Поддержка и развитие",
    description: "Сопровождаем после запуска: добавляем функции, правим под новые задачи, отвечаем на вопросы.",
    icon: "lock",
    badge: "Поддержка",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Что мы делаем для вашего бизнеса</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Разрабатываем ботов и приложения для Max, которые работают на вас — принимают заявки, продают и общаются с клиентами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}