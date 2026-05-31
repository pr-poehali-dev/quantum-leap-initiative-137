import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Ольга Смирнова",
    role: "Владелец салона красоты «Glamour»",
    avatar: "/professional-woman-scientist.png",
    content:
      "Бот записывает клиентов пока я сплю. За первый месяц пропустили нулевых визитов — всё напоминает автоматически. Просто огонь!",
  },
  {
    name: "Дмитрий Карпов",
    role: "Основатель магазина автозапчастей",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Запустили каталог в Max за 5 дней. Теперь клиенты сами находят нужную деталь и оформляют заказ — менеджер только собирает.",
  },
  {
    name: "Мария Ли",
    role: "Управляющий кофейней «Утро»",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Думала, что боты — это сложно и дорого. Оказалось быстро и по делу. Рассылка по постоянным гостям даёт +30% в пиковые дни.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят наши клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Малый бизнес уже автоматизирует продажи и сервис с помощью ботов в Max
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}