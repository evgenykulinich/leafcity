'use client'

import { useEffect } from 'react'

const YandexMetrikaScript = () => {
  useEffect(() => {
    // Создание скрипта
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(97899201, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `
    document.body.appendChild(script)

    // Создание <noscript> блока
    const noscript = document.createElement('noscript')
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.src = 'https://mc.yandex.ru/watch/97899201'
    img.style.position = 'absolute'
    img.style.left = '-9999px'
    img.alt = ''
    div.appendChild(img)
    noscript.appendChild(div)
    document.body.appendChild(noscript)

    // Очистка при размонтировании компонента
    return () => {
      document.body.removeChild(script)
      document.body.removeChild(noscript)
    }
  }, [])

  return null
}

export default YandexMetrikaScript
