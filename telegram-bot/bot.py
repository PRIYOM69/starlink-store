from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    CallbackQueryHandler,
    ContextTypes,
    MessageHandler,
    filters,
)

TOKEN = "8956944999:AAHTw-TWB_X2C457BWaNtYx2wGfq3_dcGwM"
ADMIN_ID = 8034949717

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):

    keyboard = [
        [
            InlineKeyboardButton(
                "🚀 Завершити оформлення",
                callback_data="ukraine"
            )
        ]
    ]

    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
"""
👋 Вітаємо у Starlink Store

📋 Вставте сюди скопійоване замовлення з сайту.

Після надсилання замовлення натисніть кнопку нижче для отримання реквізитів оплати.

🚀 Це займе менше хвилини.
""",
reply_markup=reply_markup
)

async def button(update: Update, context: ContextTypes.DEFAULT_TYPE):

    query = update.callback_query

    await query.answer()

    if query.data == "ukraine":

        import random

        order_id = f"SL-{random.randint(10000, 99999)}"

        await query.message.reply_text(
    f"""
🧾 Номер замовлення: {order_id}

🇺🇦 Реквізити для оплати

🏦 Банк: Monobank

💳 Картка:
4444 1111 2222 3333

👤 Отримувач:
Starlink Store

📸 Після оплати надішліть скріншот у цей чат.

✅ Після підтвердження платежу ви отримаєте повідомлення про успішне оформлення замовлення.

🚀 Дякуємо за вибір Starlink Store!
"""
)
async def text_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):

    user = update.message.from_user

    text = update.message.text

    await context.bot.send_message(
        chat_id=ADMIN_ID,
        text=f"""
🛒 НОВЕ ЗАМОВЛЕННЯ

👤 Username:
@{user.username}

🆔 User ID:
{user.id}

{text}
        """
    )
async def photo_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):

    user = update.message.from_user

    photo = update.message.photo[-1]

    await context.bot.send_photo(
        chat_id=ADMIN_ID,
        photo=photo.file_id,
        caption=f"""
💸 New payment screenshot received

👤 User:
@{user.username}

🆔 User ID:
{user.id}
        """
    )

    await update.message.reply_text(
        """
✅ Скріншот оплати отримано.

Ваш платіж зараз перевіряється.

Наша команда найближчим часом підтвердить ваше замовлення 🚀
        """
    )


async def track(update: Update, context: ContextTypes.DEFAULT_TYPE):

    await update.message.reply_text(
        """
📦 Статус замовлення

Your order is currently:

🟡 Processing

Estimated delivery:
3-5 business days 🚀
        """
    )


async def approve(update: Update, context: ContextTypes.DEFAULT_TYPE):

    if update.message.from_user.id != ADMIN_ID:
        return

    try:

        user_id = int(context.args[0])

        await context.bot.send_message(
            chat_id=user_id,
            text="""
✅ Оплату підтверджено

Your order has been approved and is now being prepared for shipment 🚀
            """
        )

        await update.message.reply_text(
            "✅ Approval sent successfully"
        )

    except:

        await update.message.reply_text(
        "❌ Usage: /approve USER_ID"
    )

async def trackset(update: Update, context: ContextTypes.DEFAULT_TYPE):

    if update.message.from_user.id != ADMIN_ID:
        return

    try:

        user_id = int(context.args[0])

        tracking_number = context.args[1]

        await context.bot.send_message(
            chat_id=user_id,
            text=f"""
📦 Ваше замовлення відправлено

🚚 Номер відстеження:
{tracking_number}

Дякуємо за замовлення 🚀
            """
        )

        await update.message.reply_text(
            "✅ Tracking number sent"
        )

    except:

        await update.message.reply_text(
            "❌ Usage: /trackset USER_ID TRACK_NUMBER"
        )

app = ApplicationBuilder().token(TOKEN).build()

app.add_handler(CommandHandler("start", start))
app.add_handler(CommandHandler("track", track))
app.add_handler(CommandHandler("approve", approve))
app.add_handler(CommandHandler("trackset", trackset))
app.add_handler(CallbackQueryHandler(button))

app.add_handler(
    MessageHandler(
        filters.TEXT & ~filters.COMMAND,
        text_handler
    )
)

app.add_handler(MessageHandler(filters.PHOTO, photo_handler))

app.run_polling()

