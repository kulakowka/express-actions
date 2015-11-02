export default function updatedAtPlugin (schema, options) {
  schema.add({updatedAt: { type: Date, default: Date.now }})

  schema.pre('save', function (next) {
    this.updatedAt = Date.now()
    next()
  })

  if (options && options.index) {
    schema.path('updatedAt').index(options.index)
  }
}
