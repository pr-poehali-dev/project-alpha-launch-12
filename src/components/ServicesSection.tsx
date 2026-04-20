import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "MapPin",
    title: "Геосервисы",
    description:
      "Комплексная работа по упаковке и сопровождению Яндекс Карт, 2ГИС, Google Maps. Выводим вашу клинику в ТОП — чтобы пациент нашёл именно вас, а не конкурента через дорогу.",
  },
  {
    icon: "Stethoscope",
    title: "Медицинские порталы",
    description:
      "Комплексная работа по упаковке и сопровождению ПроДокторов, СберЗдоровье, НаПоправку. Превращаем профиль агрегатора в стабильный канал записи пациентов.",
  },
  {
    icon: "Share2",
    title: "Соцсети для клиник",
    description:
      "Создание контента, который снимает страхи пациента и закрывает возражения до визита в клинику. Стратегия, публикации, модерация и таргетированная реклама.",
  },
  {
    icon: "Newspaper",
    title: "Медицинский PR",
    description:
      "Экспертные публикации врачей в авторитетных СМИ, выступления на конференциях, аудио и видео-подкастах. Укрепляем доверие и отстраиваем от конкурентов.",
  },
  {
    icon: "Search",
    title: "SEO для медицины",
    description:
      "Знаем специфику медицинской тематики и работаем со всеми инструментами. Оптимизация сайта клиники с учётом требований Яндекса и ограничений медицинской рекламы.",
  },
  {
    icon: "TrendingUp",
    title: "Репутация и отзывы",
    description:
      "Системная работа с отзывами на всех площадках. Взаимодействие с пациентами, нейтрализация негатива, наращивание рейтинга клиники и врачей.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Медицинский маркетинг 2026
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Все инструменты для{" "}
          <span className="text-primary">роста клиники</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Маркетинговое агентство полного цикла для клиник и сетей медицинских центров. Знаем специфику — работаем со всеми инструментами.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} fallback="Star" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="font-semibold px-8" asChild>
            <a href="https://t.me/ogneva_media" target="_blank" rel="noopener noreferrer">
              Бесплатная консультация
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
