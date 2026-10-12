package com.altonivelcarshop.app;

import android.app.Activity;
import android.os.Bundle;
import android.content.Intent;
import android.net.Uri;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebResourceRequest;
import android.webkit.CookieManager;
import android.widget.Toast;

public class MainActivity extends Activity {
    private WebView web;
    private static final String HOME = "file:///android_asset/www/index.html";
    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        web = new WebView(this);
        setContentView(web);
        WebSettings settings = web.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setMediaPlaybackRequiresUserGesture(false);
        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient() {
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                String scheme = uri.getScheme();
                if ("file".equalsIgnoreCase(scheme) && uri.toString().startsWith("file:///android_asset/www/")) return false;
                if ("http".equalsIgnoreCase(scheme) || "https".equalsIgnoreCase(scheme)) {
                    // CDN styles/scripts/images and Google Maps iframe stay inside the app;
                    // navigation to WhatsApp, maps and other sites opens the installed app/browser.
                    if (!request.isForMainFrame()) return false;
                    openExternal(uri);
                    return true;
                }
                openExternal(uri);
                return true;
            }
        });
        web.loadUrl(HOME);
    }
    private void openExternal(Uri uri) {
        try { startActivity(new Intent(Intent.ACTION_VIEW, uri)); }
        catch (Exception e) { Toast.makeText(this, "No se encontró una aplicación para abrir el enlace", Toast.LENGTH_LONG).show(); }
    }
    @Override public void onBackPressed() {
        if (web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }
    @Override protected void onDestroy() {
        if (web != null) { web.destroy(); web = null; }
        super.onDestroy();
    }
}
