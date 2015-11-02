export default function createdAtPlugin (schema, options) {
  schema.add({createdAt: { type: Date, default: Date.now }})

  if (options && options.index) {
    schema.path('createdAt').index(options.index)
  }
}
