import { serial, text, varchar, timestamp, mysqlTable , int } from "drizzle-orm/mysql-core";

export const StarSchema = mysqlTable('Star', {
    id: serial('id').primaryKey(),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
    name: varchar('name', { length: 255 }),
    constellation: varchar('constellation', { length: 255 }),
    distance: int('distance'),
    discoveredBy: varchar('discoveredBy', { length: 255 }),
    discoveryYear: int('discoveryYear'),
    description: text('description'),
});