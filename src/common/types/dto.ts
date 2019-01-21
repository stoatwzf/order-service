export class Dto {
  assignTo(row: object) {
    Object.assign(row, this)
    return row
  }
}
