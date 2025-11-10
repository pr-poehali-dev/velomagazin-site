import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const bikes = [
    {
      id: 1,
      name: 'Mountain Pro X',
      price: '89 990 ₽',
      image: 'https://cdn.poehali.dev/projects/0cf2f107-ddc0-4798-9a1e-d45bdeff39c7/files/10f2c1c7-192e-40fe-b60f-afe74dea65ce.jpg',
      category: 'Горный'
    },
    {
      id: 2,
      name: 'Road Racer Elite',
      price: '124 990 ₽',
      image: 'https://cdn.poehali.dev/projects/0cf2f107-ddc0-4798-9a1e-d45bdeff39c7/files/a1b51303-5464-4cff-84c2-61ab2f1974c3.jpg',
      category: 'Шоссейный'
    },
    {
      id: 3,
      name: 'City Comfort',
      price: '45 990 ₽',
      image: 'https://cdn.poehali.dev/projects/0cf2f107-ddc0-4798-9a1e-d45bdeff39c7/files/74a090e0-facd-4f81-9618-ff4ba7961ad5.jpg',
      category: 'Городской'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Bike" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">VeloShop</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">Доставка</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Свобода <br />
                <span className="text-primary">Движения</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональные велосипеды для спорта и отдыха. Качество, проверенное временем.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('catalog')}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
                  Связаться
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://cdn.poehali.dev/projects/0cf2f107-ddc0-4798-9a1e-d45bdeff39c7/files/10f2c1c7-192e-40fe-b60f-afe74dea65ce.jpg" 
                alt="Hero Bike" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные модели</h2>
            <p className="text-xl text-muted-foreground">Выберите свой идеальный велосипед</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bikes.map((bike) => (
              <Card key={bike.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                <div className="overflow-hidden bg-muted">
                  <img 
                    src={bike.image} 
                    alt={bike.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-secondary font-semibold mb-2">{bike.category}</div>
                  <h3 className="text-2xl font-bold mb-3">{bike.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{bike.price}</span>
                    <Button>
                      Купить
                      <Icon name="ShoppingCart" size={18} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Качество</h3>
              <p className="text-muted-foreground">Только проверенные бренды и сертифицированная продукция</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Icon name="Wrench" size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Сервис</h3>
              <p className="text-muted-foreground">Бесплатное обслуживание первые 6 месяцев</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Опыт</h3>
              <p className="text-muted-foreground">15 лет на рынке, более 10 000 довольных клиентов</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Доставка и оплата</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Быстрая доставка</h3>
                    <p className="text-muted-foreground mb-2">• По Москве — 1-2 дня</p>
                    <p className="text-muted-foreground mb-2">• По России — 3-7 дней</p>
                    <p className="text-muted-foreground">• Бесплатно от 50 000 ₽</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 flex-shrink-0">
                    <Icon name="CreditCard" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Удобная оплата</h3>
                    <p className="text-muted-foreground mb-2">• Наличными курьеру</p>
                    <p className="text-muted-foreground mb-2">• Банковской картой</p>
                    <p className="text-muted-foreground">• Рассрочка 0%</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Свяжитесь с нами</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">+7 (495) 123-45-67</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:info@veloshop.ru" className="text-muted-foreground hover:text-primary transition-colors">info@veloshop.ru</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <p className="text-muted-foreground">г. Москва, ул. Велосипедная, д. 10</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Clock" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <p className="text-muted-foreground">Пн-Вс: 10:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Bike" size={28} />
            <span className="text-xl font-bold">VeloShop</span>
          </div>
          <p className="text-background/80">© 2024 VeloShop. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
