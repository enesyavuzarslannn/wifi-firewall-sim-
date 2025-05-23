# Wi-Fi ve Firewall Güvenlik Analiz Aracı (Simülatif)

Bu proje, HTML, CSS ve JavaScript kullanılarak geliştirilmiş simülatif bir Wi-Fi ve firewall güvenlik analiz aracıdır. Kullanıcıların firewall kuralları ekleyerek ağ trafiğini simüle edebildiği interaktif bir araç sunar.

## Özellikler

- IP bazlı engelleme ve izin verme kuralları ekleme  
- Rastgele ağ trafiği simülasyonu  
- Trafik için "BLOKLANDI" veya "İZİN VERİLDİ" sonuçları  
- Basit ve kullanıcı dostu terminal arayüzü

## Kullanım

1. Terminale kural eklemek için komut yazın ve Enter’a basın:  
   - `blokla ip 192.168.1.5` → Bu IP adresini engeller  
   - `izinver ip 10.0.0.3` → Bu IP adresine izin verir  

2. Kuralları ekledikten sonra `simüle` yazarak simülasyonu başlatın.  
3. Rastgele ağ trafiği için kurallarınıza göre izin/verme sonucu alacaksınız.

## Teknolojiler

- HTML5  
- CSS3  
- JavaScript (ES6+)

## Lisans

MIT License © 2025 Enes Yavuzarslan

---

**Not:** Bu proje gerçek ağ ortamlarında kullanılmamakta, tamamen eğitim ve simülasyon amaçlıdır.
