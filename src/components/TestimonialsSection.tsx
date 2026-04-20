import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "За 3 месяца работы с геосервисами наша клиника поднялась с 8-го на 1-е место в Яндекс Картах по нашему городу. Запись выросла на 40%.",
    name: "Главврач клиники «МедЦентр»",
    role: "Москва",
    result: "+40% записей",
  },
  {
    quote:
      "Думали, что без платной рекламы невозможно привлекать пациентов. Ogneva Media доказали обратное — уже в первый месяц 38 новых обращений только с карт.",
    name: "Директор стоматологии",
    role: "Казань",
    result: "38 обращений за месяц",
  },
  {
    quote:
      "Отлично выстроили работу с ПроДокторов и СберЗдоровье. Рейтинг врачей вырос с 4.1 до 4.8, количество онлайн-записей утроилось.",
    name: "Руководитель медцентра",
    role: "Екатеринбург",
    result: "×3 онлайн-записи",
  },
  {
    quote:
      "Публикации в СМИ и работа с репутацией помогли нам открыть вторую клинику — пациенты уже знали о нас. Команда профессиональная, всегда на связи.",
    name: "Собственник сети клиник",
    role: "Санкт-Петербург",
    result: "Открыли 2-ю клинику",
  },
  {
    quote:
      "За полгода сотрудничества количество пациентов из геосервисов выросло в 4 раза. При этом мы ни рубля не потратили на рекламу.",
    name: "Главврач офтальмологической клиники",
    role: "Новосибирск",
    result: "×4 пациента с карт",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Результаты клиентов
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Реальные цифры клиник, которые уже работают с нами. Без рекламного бюджета.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[480px] border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-8 w-8 text-primary" />
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {testimonial.result}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
