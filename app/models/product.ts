import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Product extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare barcode: string

    @column()
    declare name: string

    @column()
    declare brand: string

    @column()
    declare categories: string

    @column({ columnName: 'image_url' })
    declare imageUrl: string | null

    @column()
    declare nutriments: Record<string, number>

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}
