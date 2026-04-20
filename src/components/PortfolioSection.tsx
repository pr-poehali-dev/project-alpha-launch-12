import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const cases = [
  {
    category: "Геосервисы · Яндекс Карты",
    title: "Стоматология «Улыбка»",
    location: "Казань",
    description:
      "Подняли клинику с 12-го на 1-е место в Яндекс Картах за 2 месяца. Оптимизировали карточку, выстроили работу с отзывами, запустили регулярный контент.",
    tags: ["Яндекс Карты", "2ГИС", "Отзывы"],
    results: [
      { value: "×4", label: "обращения с карт" },
      { value: "ТОП-1", label: "в Яндекс Картах" },
    ],
  },
  {
    category: "Медицинские порталы",
    title: "Многопрофильный центр «Здоровье»",
    location: "Екатеринбург",
    description:
      "Упаковали и оптимизировали профили на ПроДокторов и СберЗдоровье. Создали карточки 18 врачей. Рейтинг вырос с 4.0 до 4.8 за 3 месяца.",
    tags: ["ПроДокторов", "СберЗдоровье", "НаПоправку"],
    results: [
      { value: "+38", label: "новых записей/мес" },
      { value: "4.8★", label: "средний рейтинг" },
    ],
  },
  {
    category: "Соцсети для клиники",
    title: "Офтальмологический центр",
    location: "Новосибирск",
    description:
      "Разработали контент-стратегию, запустили ведение соцсетей. Контент снимает страхи перед операцией на глаза и закрывает возражения пациентов до визита.",
    tags: ["ВКонтакте", "Контент", "Таргет"],
    results: [
      { value: "+62%", label: "подписчиков" },
      { value: "×3", label: "онлайн-записи" },
    ],
  },
  {
    category: "Медицинский PR",
    title: "Сеть клиник «МедЭксперт»",
    location: "Санкт-Петербург",
    description:
      "Организовали публикации главного врача в РБК, Медвестнике и профильных изданиях. Выступления на конференциях. Результат — доверие и ценовая премия.",
    tags: ["PR в СМИ", "Экспертность", "Конференции"],
    results: [
      { value: "15+", label: "публикаций в СМИ" },
      { value: "+25%", label: "к среднему чеку" },
    ],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Кейсы клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реальные результаты клиник, которые выбрали медицинский маркетинг без рекламного бюджета.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <p className="text-sm text-primary font-semibold mb-1">{item.category}</p>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 ml-4 mt-1 flex-shrink-0">
                    <Icon name="MapPin" size={12} />
                    {item.location}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.description}</p>

                <div className="flex gap-4 mb-6">
                  {item.results.map((res, i) => (
                    <div key={i} className="bg-primary/10 rounded-xl px-4 py-3 text-center flex-1">
                      <div className="text-2xl font-bold text-primary">{res.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{res.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary font-semibold px-8" asChild>
            <a href="https://t.me/ogneva_media" target="_blank" rel="noopener noreferrer">
              Обсудить ваш проект
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
