import React, { useRef, useState } from 'react';
import { BackHandler, Platform, SafeAreaView, StatusBar, View, Text, Pressable, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const HABIBI_URL = 'https://www.habibifal.site';

export default function App() {
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [failed, setFailed] = useState(false);

  React.useEffect(() => {
    if (Platform.OS !== 'android') return;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (canGoBack && webView.current) {
        webView.current.goBack();
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [canGoBack]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF8DF', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0 }}>
      <ExpoStatusBar style="dark" backgroundColor="#FFF8DF" />
      <View style={{ height: 54, backgroundColor: '#FFF8DF', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#F1DF9B' }}>
        <Text style={{ fontSize: 25, color: '#159E9A', fontWeight: '700', fontStyle: 'italic' }}>Habibi</Text>
      </View>
      {failed ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Habibi’ye ulaşılamadı</Text>
          <Text style={{ textAlign: 'center', marginBottom: 18 }}>İnternet bağlantını kontrol edip yeniden deneyebilirsin.</Text>
          <Pressable onPress={() => { setFailed(false); webView.current?.reload(); }} style={{ backgroundColor: '#159E9A', paddingHorizontal: 22, paddingVertical: 12, borderRadius: 12 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>Yeniden dene</Text>
          </Pressable>
        </View>
      ) : (
        <WebView
          ref={webView}
          source={{ uri: HABIBI_URL }}
          onNavigationStateChange={nav => setCanGoBack(nav.canGoBack)}
          onError={() => setFailed(true)}
          onHttpError={event => { if (event.nativeEvent.statusCode >= 500) setFailed(true); }}
          startInLoadingState
          renderLoading={() => <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator size="large" color="#159E9A" /><Text style={{ marginTop: 10, color: '#6C642F' }}>Habibi açılıyor…</Text></View>}
          javaScriptEnabled
          domStorageEnabled
          sharedCookiesEnabled
          allowsBackForwardNavigationGestures
          setSupportMultipleWindows={false}
          originWhitelist={['https://*', 'http://*']}
          style={{ flex: 1, backgroundColor: '#FFFFFF' }}
        />
      )}
    </SafeAreaView>
  );
}
