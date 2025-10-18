import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const services = [
    { icon: 'Sparkles', title: 'Чистка лица', description: 'Глубокое очищение и обновление кожи', price: 'от 3500 ₽' },
    { icon: 'Zap', title: 'Мезотерапия', description: 'Инъекционное омоложение и увлажнение', price: 'от 5000 ₽' },
    { icon: 'Heart', title: 'Пилинги', description: 'Химические пилинги для идеальной кожи', price: 'от 4000 ₽' },
    { icon: 'Star', title: 'Массаж лица', description: 'Лимфодренажный и скульптурирующий', price: 'от 2500 ₽' },
    { icon: 'Smile', title: 'Уход за губами', description: 'Увлажнение и контурная пластика', price: 'от 3000 ₽' },
    { icon: 'Eye', title: 'Уход за кожей вокруг глаз', description: 'Борьба с отёками и тёмными кругами', price: 'от 2000 ₽' },
  ];

  const portfolioItems = [
    { 
      id: 1, 
      before: 'https://cdn.poehali.dev/projects/2b63c1e8-258e-4eb8-bdee-4b30cf8d99e5/files/2a2d6ff7-cb7b-4b57-9012-824385c5b996.jpg',
      after: 'https://cdn.poehali.dev/projects/2b63c1e8-258e-4eb8-bdee-4b30cf8d99e5/files/2a2d6ff7-cb7b-4b57-9012-824385c5b996.jpg',
      category: 'cleaning',
      title: 'Чистка лица',
      description: 'Результат после комплексной чистки'
    },
    { 
      id: 2, 
      before: 'https://cdn.poehali.dev/projects/2b63c1e8-258e-4eb8-bdee-4b30cf8d99e5/files/59d31181-1518-4fc1-b16f-a301dd99ff41.jpg',
      after: 'https://cdn.poehali.dev/projects/2b63c1e8-258e-4eb8-bdee-4b30cf8d99e5/files/59d31181-1518-4fc1-b16f-a301dd99ff41.jpg',
      category: 'peeling',
      title: 'Пилинг',
      description: 'Обновление кожи пилингом'
    },
    { 
      id: 3, 
      before: 'https://cdn.poehali.dev/projects/2b63c1e8-258e-4eb8-bdee-4b30cf8d99e5/files/aff47e69-3632-41de-9718-41a92c66d183.jpg',
      after: 'https://cdn.poehali.dev/projects/2b63c1e8-258e-4eb8-bdee-4b30cf8d99e5/files/aff47e69-3632-41de-9718-41a92c66d183.jpg',
      category: 'meso',
      title: 'Мезотерапия',
      description: 'Увлажнение и сияние кожи'
    },
  ];

  const reviews = [
    { name: 'Анна Петрова', rating: 5, text: 'Прекрасный мастер! Кожа сияет после процедур', date: '15.10.2024' },
    { name: 'Мария Смирнова', rating: 5, text: 'Очень профессионально и комфортно. Рекомендую!', date: '10.10.2024' },
    { name: 'Елена Волкова', rating: 5, text: 'Результат превзошёл все ожидания. Спасибо!', date: '05.10.2024' },
  ];

  const filteredPortfolio = selectedFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedFilter);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-pink-100">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Beauty Studio
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Calendar" size={16} className="mr-2" />
            Записаться
          </Button>
        </nav>
      </header>

      <section id="hero" className="pt-24 pb-16 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-peach-50">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Красота и здоровье<br />вашей кожи
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная косметология с заботой о каждом клиенте
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на процедуру
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
          <div className="mt-12 animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/2b63c1e8-258e-4eb8-bdee-4b30cf8d99e5/files/59d31181-1518-4fc1-b16f-a301dd99ff41.jpg" 
              alt="Beauty Studio" 
              className="rounded-3xl shadow-2xl mx-auto max-w-4xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Индивидуальный подход к каждому клиенту
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-pink-100 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Результаты наших процедур
          </p>
          
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            <Button 
              variant={selectedFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('all')}
              className={selectedFilter === 'all' ? 'bg-primary' : ''}
            >
              Все работы
            </Button>
            <Button 
              variant={selectedFilter === 'cleaning' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('cleaning')}
              className={selectedFilter === 'cleaning' ? 'bg-primary' : ''}
            >
              Чистка лица
            </Button>
            <Button 
              variant={selectedFilter === 'peeling' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('peeling')}
              className={selectedFilter === 'peeling' ? 'bg-primary' : ''}
            >
              Пилинги
            </Button>
            <Button 
              variant={selectedFilter === 'meso' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('meso')}
              className={selectedFilter === 'meso' ? 'bg-primary' : ''}
            >
              Мезотерапия
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in border-2 border-pink-100">
                <CardContent className="p-0">
                  <Tabs defaultValue="before" className="w-full">
                    <TabsList className="w-full rounded-none bg-gradient-to-r from-primary/10 to-accent/10">
                      <TabsTrigger value="before" className="flex-1">До</TabsTrigger>
                      <TabsTrigger value="after" className="flex-1">После</TabsTrigger>
                    </TabsList>
                    <TabsContent value="before" className="m-0">
                      <img src={item.before} alt="До процедуры" className="w-full h-80 object-cover" />
                    </TabsContent>
                    <TabsContent value="after" className="m-0">
                      <img src={item.after} alt="После процедуры" className="w-full h-80 object-cover" />
                    </TabsContent>
                  </Tabs>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачные цены на все услуги
          </p>
          <Card className="border-2 border-pink-100">
            <CardContent className="p-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-4 border-b border-pink-100 last:border-0 hover:bg-pink-50/50 px-4 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/2b63c1e8-258e-4eb8-bdee-4b30cf8d99e5/files/aff47e69-3632-41de-9718-41a92c66d183.jpg" 
                alt="О мастере" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Привет! Я — сертифицированный косметолог с 8-летним опытом работы. 
                Моя специализация — уходовые процедуры и anti-age терапия.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Образование</h4>
                    <p className="text-muted-foreground">Медицинский университет, косметология</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Опыт</h4>
                    <p className="text-muted-foreground">Более 2000 довольных клиентов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Сертификаты</h4>
                    <p className="text-muted-foreground">15+ международных сертификатов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 border-2 border-pink-100 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-peach-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь со мной удобным способом
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-pink-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">beauty@studio.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Время работы</p>
                      <p className="text-muted-foreground">Пн-Вс: 10:00 - 21:00</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Записаться</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Анна"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-primary focus:outline-none transition-colors"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Услуга</label>
                    <select className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-primary focus:outline-none transition-colors">
                      <option>Выберите услугу</option>
                      {services.map((service, idx) => (
                        <option key={idx}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-primary focus:outline-none transition-colors resize-none"
                      rows={3}
                      placeholder="Ваши пожелания..."
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-accent text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Beauty Studio</h3>
          <p className="text-white/80 mb-4">Красота и здоровье вашей кожи</p>
          <p className="text-sm text-white/60">© 2024 Beauty Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
