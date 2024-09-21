export default function manifest() {
    return {
      name: 'Hedgehog Web Developer',
      short_name: 'Hedgehog Web Developer',
      description: 'A web developer with a passion for creating innovative and user-friendly web applications.',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      "icons":[
        {"src":"/android-chrome-192x192.png",
        "sizes":"192x192",
        "type":"image/png"
        },
        {"src":"/android-chrome-512x512.png",
        "sizes":"512x512",
        "type":"image/png"
        },
        {"src":"/favicon-32x32.png",
        "sizes":"32x32",
        "type":"image/png"
        },
        {"src":"/favicon-16x16.png",
        "sizes":"16x16",
        "type":"image/png"
        }
        ],
    }
  }