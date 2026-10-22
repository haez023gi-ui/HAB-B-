# Habibi Mobile — başlangıç paketi

Bu Expo projesi, mevcut Habibi web sitesini iOS ve Android için bir WebView kabuğunda açan ilk test sürümüdür.

## Önemli
- Bu bir başlangıç iskeletidir; henüz App Store / Google Play'e gönderilmedi.
- `App.js` içindeki `HABIBI_URL` adresini, canlı sitenin doğru adresiyle kontrol edin.
- Mobil mağazaların incelemesi, yalnızca web sitesini saran uygulamaları yeterli bulmayabilir. Yayın öncesinde gerçek mobil özellikler, gizlilik metni, hesap silme ve ödeme kuralları kontrol edilmelidir.
- iOS uygulama derlemesi ve App Store gönderimi için Apple Developer hesabı gerekir. Android yayın için Google Play Console hesabı gerekir.

## Çalıştırma
1. Node.js olan bir ortamda bu klasöre girin.
2. `npm install`
3. `npx expo start`

## EAS ile mağaza derlemesi
1. `npm install -g eas-cli`
2. `eas login`
3. `eas build:configure`
4. `eas build --platform android`
5. `eas build --platform ios`

iOS mağaza dağıtımı için Apple Developer üyeliği ve gerekli imzalama ayarları gerekir.
