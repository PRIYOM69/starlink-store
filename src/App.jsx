import standardImg from "./image/standard.jpg"
import heroImg from "./image/hero.jpg"
import miniImg from "./image/mini.jpg"
import businessImg from "./image/business.jpg"

import residentialImg from "./image/residential.jpg"
import roamImg from "./image/roam.jpg"
import businessProImg from "./image/businesspro.jpg"
import { useState } from "react"

export default function StarlinkStore() {

  const [cart, setCart] = useState([])

const [fullName, setFullName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [address, setAddress] = useState("")
const [showNotification, setShowNotification] = useState(false)

  const addToCart = (product) => {

  const existingProduct = cart.find(
    (item) => item.name === product.name
  )

  if (existingProduct) {

    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )

  } else {

    setCart([
      ...cart,
      { ...product, quantity: 1 },
    ])

  }

}
const updateQuantity = (name, amount) => {

  setCart(
    cart
      .map((item) =>

        item.name === name
          ? {
              ...item,
              quantity: item.quantity + amount,
            }
          : item

      )
      .filter((item) => item.quantity > 0)
  )

}
const removeFromCart = (indexToRemove) => {
  setCart(cart.filter((_, index) => index !== indexToRemove))
}
  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
)
const orderItems = cart
  .map(item => `• ${item.name} x${item.quantity}`)
  .join("\n")
  return (
    <div className="min-h-[80vh] bg-black text-white scroll-smooth overflow-x-hidden">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 px-4 py-4">

  <div className="flex justify-between items-center">

    <h1 className="text-lg md:text-2xl font-black tracking-wide">
      STARLINK
    </h1>

    <a
      href="#cart"
      className="bg-white text-black px-3 py-2 rounded-full font-bold"
    >
      🛒 {cart.length}
    </a>

  </div>

  <nav className="flex justify-center gap-4 mt-3 text-xs sm:text-sm font-semibold text-gray-300">

    <a href="#products" className="hover:text-white transition">
  Товари
</a>

<a href="#plans" className="hover:text-white transition">
  Плани
</a>

<a href="#payment" className="hover:text-white transition">
  Оплата
</a>

  </nav>

</header>
      {showNotification && (

  <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-5 rounded-3xl shadow-2xl text-center animate-pulse">

    <div className="text-2xl font-bold mb-2">
      ✅ Замовлення скопійовано
    </div>

    <div className="text-gray-300">
  ✅ Майже готово!

  <br />

  Зараз відкриється Telegram для завершення замовлення 🚀
</div>

  </div>

)}
      <section
  className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden"
>

  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${heroImg})`,
    }}
  ></div>

  <div className="absolute inset-0 bg-black/75"></div>

  <div className="relative z-10 max-w-4xl mx-auto">

  <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-6">
    🇺🇦 Starlink для України
  </div>

  <h2 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
    Супутниковий
        <br />
    Інтернет нового покоління
  </h2>

  <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
    Швидкісний Starlink для дому, бізнесу,
    подорожей та роботи по всій Україні.
  </p>

  <a
    href="#products"
    className="inline-block bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base md:text-xl font-bold hover:bg-gray-200 transition"
  >
    Перейти до товарів
  </a>

</div>

</section>


      <section
  id="products"
  className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 p-4 md:p-10"
>
        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:-translate-y-3 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
           <img
  src={standardImg}
  alt="Starlink Standard"
  className="w-full object-contain rounded-2xl mb-6 hover:scale-105 transition duration-500"
/>
          <h3 className="text-2xl font-bold mb-4">
            Starlink Standard
          </h3>

          <p className="text-gray-400 mb-4">
            Интернет для дома.
          </p>

          <div className="text-3xl font-bold mb-6">
            $249
          </div>

          <button
  onClick={() => {

    console.log("clicked")

    addToCart({
      name: "Starlink Standard",
      price: 249,
    })

  }}
  className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-200 hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95 transition-all duration-300"
>
  Купить
</button>
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:-translate-y-3 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
          <img
  src={miniImg}
  alt="Starlink Mini"
  className="w-full object-contain rounded-2xl mb-6 hover:scale-105 transition duration-500"
/>
          <h3 className="text-2xl font-bold mb-4">
            Starlink Mini
          </h3>

          <p className="text-gray-400 mb-4">
            Мобильная версия.
          </p>

          <div className="text-3xl font-bold mb-6">
            $169
          </div>
<button
  onClick={() => {
    console.log("mini clicked")

    addToCart({
      name: "Starlink Mini",
      price: 169,
    })
  }}
  className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-200 hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95 transition-all duration-300"
>
  Купить
</button>
      
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:-translate-y-3 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
          <img
  src={businessImg}
  alt="Starlink Business"
  className="w-full object-contain rounded-2xl mb-6 hover:scale-105 transition duration-500"
/>
          <h3 className="text-2xl font-bold mb-4">
            Starlink Business
          </h3>

          <p className="text-gray-400 mb-4">
            Для бизнеса и офисов.
          </p>

          <div className="text-3xl font-bold mb-6">
            $1499
          </div>

          <button
  onClick={() => {
    console.log("business clicked")

    addToCart({
      name: "Starlink Business",
      price: 1499,
    })
  }}
  className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-200 hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95 transition-all duration-300"
>
  Купить
</button>
          
          
          </div>
         </section>
 
       <section
        id="plans"
        className="bg-zinc-950 py-16 px-4 md:px-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12">
          Подписки
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-black border border-zinc-800 p-4 md:p-8 rounded-3xl hover:-translate-y-3 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
          {/* 
            <img
  src={residentialImg}
  alt="Residential"
  className="w-full h-40 md:h-auto object-cover rounded-2xl mb-4 hover:scale-105 transition duration-500"
/>
*/}
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Residential
            </h3>

            <div className="text-3xl md:text-5xl font-black mb-6">
              $69/month
            </div>

            <button
  onClick={() => {
    console.log("residential clicked")

    addToCart({
      name: "Residential Subscription",
      price: 69,
    })
  }}
  className="w-full bg-white text-black py-2.5 rounded-xl font-bold hover:bg-gray-200 hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95 transition-all duration-300"
>
  Підключити
</button>
          </div>

          <div className="bg-black border border-zinc-800 p-4 md:p-8 rounded-3xl hover:-translate-y-3 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
          {/*
            <img
  src={roamImg}
  alt="Roam Unlimited"
  className="w-full h-40 md:h-auto object-cover rounded-2xl mb-4 hover:scale-105 transition duration-500"
/>
*/}
            <h3 className="text-3xl font-bold mb-4">
              Roam Unlimited
            </h3>

            <div className="text-4xl font-black mb-6">
              $129/month
            </div>

            <button
  onClick={() => {
    console.log("roam clicked")

    addToCart({
      name: "Roam Unlimited",
      price: 129,
    })
  }}
  className="w-full bg-white text-black py-2.5 rounded-xl font-bold hover:bg-gray-200 hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95 transition-all duration-300"
>
  Підключити
</button>
          </div>

          <div className="bg-black border border-zinc-800 p-4 md:p-8 rounded-3xl hover:-translate-y-3 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
            <img
  src={businessProImg}
  alt="Business Pro"
  className="w-full h-40 md:h-auto object-cover rounded-2xl mb-4 hover:scale-105 transition duration-500"
/>
            <h3 className="text-3xl font-bold mb-4">
              Business Pro
            </h3>

            <div className="text-4xl font-black mb-6">
              $350/month
            </div>

            <button
  onClick={() => {
    console.log("business pro clicked")

    addToCart({
      name: "Business Pro",
      price: 350,
    })
  }}
  className="w-full bg-white text-black py-2.5  rounded-xl font-bold hover:bg-gray-200 hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95 transition-all duration-300"
>
  Підключити
</button>
          </div>
        </div>
      </section>
<section id="cart" className="p-4 md:p-10">

  <h2 className="text-3xl md:text-4xl font-bold mb-8">
  Корзина
</h2>

  <div className="bg-zinc-900 rounded-3xl p-4 md:p-8">

    {cart.length === 0 ? (

      <p className="text-gray-400">
        Корзина пуста
      </p>

    ) : (

      <>
        <div className="space-y-4 mb-8">

          {cart.map((item, index) => (

            <div
  key={index}
  className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-zinc-800 pb-4"
>
              <div>

  <div className="font-bold">
    {item.name}
  </div>

  <div className="flex items-center gap-3 mt-2">

    <button
      onClick={() => updateQuantity(item.name, -1)}
      className="bg-zinc-700 w-8 h-8 rounded-lg"
    >
      -
    </button>

    <span>{item.quantity}</span>

    <button
      onClick={() => updateQuantity(item.name, 1)}
      className="bg-zinc-700 w-8 h-8 rounded-lg"
    >
      +
    </button>

  </div>

</div>

              <div className="flex items-center gap-4">

  <span>
  ${item.price * item.quantity}
</span>

  <button
    onClick={() => removeFromCart(index)}
    className="bg-red-500 px-3 py-1 rounded-lg"
  >
    ✕
  </button>

</div>
            </div>

          ))}

        </div>

        <div className="text-3xl font-bold">
          Total: ${total}
        </div>

      </>

    )}

  </div>

</section>  
        <section
  id="payment"
  className="max-w-7xl mx-auto px-6 py-24"
>

  <h2 className="text-5xl font-bold mb-12">
    Оформлення замовлення
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

    <div className="bg-zinc-900 rounded-3xl p-8">

      <h3 className="text-2xl md:text-3xl font-bold mb-6">
  Дані для доставки
</h3>

      <div className="space-y-5">

        <input
type="text"
placeholder="ПІБ"
value={fullName}
onChange={(e) => setFullName(e.target.value)}
className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4"
/>

        <input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4"
/>

        <input
type="text"
placeholder="Телефон"
value={phone}
onChange={(e) => setPhone(e.target.value)}
className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4"
/>

        <input
type="text"
placeholder="Адреса доставки"
value={address}
onChange={(e) => setAddress(e.target.value)}
className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4"
/>

      </div>

    </div>

    <div className="bg-zinc-900 rounded-3xl p-8">

      <h3 className="text-3xl font-bold mb-8">
        Ваше замовлення
      </h3>

      <div className="space-y-4 mb-8">

        {cart.map((item, index) => (

          <div
            key={index}
            className="flex justify-between border-b border-zinc-800 pb-4"
          >

            <div>
              <div className="font-bold">
                {item.name}
              </div>

              <div className="text-gray-400">
                Qty: {item.quantity}
              </div>
            </div>

            <div>
              ${item.price * item.quantity}
            </div>

          </div>

        ))}

      </div>

      <div className="flex justify-between text-3xl font-bold mb-8">

        <span>Total</span>

        <span>${total}</span>

      </div>

      <button
  onClick={() => {

  if (cart.length === 0) {
    alert("Корзина пуста")
    return
  }

  if (!fullName || !email || !phone || !address) {
  alert("Заповніть всі поля")
  return
}

if (!email.includes("@")) {
  alert("Введіть правильний Email")
  return
}
if (phone.length < 10) {
  alert("Введіть правильний номер телефону")
  return
}
  navigator.clipboard.writeText(
`Нове замовлення

👤 Ім'я: ${fullName}
📧 Email: ${email}
📱 Телефон: ${phone}
📦 Адреса: ${address}

🛒 Товари:
${orderItems}

💵 Сума: $${total}`
)
setShowNotification(true)

setTimeout(() => {
  setShowNotification(false)
}, 4000)

setTimeout(() => {
  window.open(
    "https://t.me/StarlinkCheckoutBot",
    "_blank"
  )
}, 800)
  }}
  className="block w-full bg-zinc-800 text-white py-4 rounded-xl text-lg font-bold hover:bg-zinc-700 transition text-center mb-4"
>
  📋 Скопіювати замовлення
</button>

<a
  href="https://t.me/StarlinkCheckoutBot"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full bg-white text-black py-4 rounded-xl text-lg font-bold hover:bg-gray-200 transition text-center"
>
  🚀 Завершити замовлення в Telegram
</a>

<p className="text-gray-400 text-sm mt-4 text-center">
  📋 1. Скопіюйте замовлення
📲 2. Відкрийте Telegram
🚀 3. Надішліть замовлення боту
</p>

    </div>

  </div>
</section>
{cart.length > 0 && (

  <a
  href="#payment"
    className="
      fixed
      bottom-4
      left-4
      right-4
      z-50
      bg-white
      text-black
      py-4
      rounded-2xl
      text-center
      font-bold
      shadow-2xl
      md:hidden
    "
  >
    💳 Оформити замовлення • ${total}
  </a>

)}
</div>

  )
}