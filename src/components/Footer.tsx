import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Ogneva<span className="text-primary">Media</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              Медицинский маркетинг для клиник по всей России. С 2017 года.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2026 OgnevaMedia. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Отдел заботы</h4>
            <div className="space-y-3">
              <a
                href="https://t.me/ogneva_media"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Send" size={16} />
                @ogneva_media
              </a>
              <a
                href="tel:+79958980418"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={16} />
                +7 995 898-04-18
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
