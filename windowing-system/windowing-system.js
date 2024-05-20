// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(initialWidth = 80, initialHeight = 60) {
  this.width= initialWidth
    this.height= initialHeight
    this.resize = function(newWidth, newHeight) {
    this.width = newWidth
    this.height = newHeight
    
    }
}

export function Position(initialX = 0, initialY = 0) {
  this.x = initialX
  this.y = initialY
  this.move = function(newX, newY) {
    this.x=newX
    this.y = newY
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position= new Position()
    
  }
  resize(size) {
    const parWidth = size.width >= 1 ? size.width : 1
    const parHeight = size.height >=1 ? size.height : 1
    const maxWidth = this.screenSize.width - this.position.x
    const maxHeight = this.screenSize.height - this.position.y
    const newWidth = parWidth < maxWidth ? parWidth : maxWidth
    const newHeight = parHeight < maxHeight ? parHeight : maxHeight
    this.size = new Size(newWidth, newHeight)

    
  }
  move(pos) {
    const reqX = pos.x < 0 ? 0 : pos.x
    const reqY = pos.y < 0 ? 0 : pos.y
    const maxX = this.screenSize.width - this.size.width
    const maxY = this.screenSize.height - this.size.height
    const newX = reqX > maxX ? maxX : reqX
    const newY = reqY > maxY ? maxY : reqY
    this.position= new Position(newX, newY)
  }
}

export function changeWindow(win) {
  win.resize(new Size(400, 300))
  win.move(new Position(100, 150))
  return win
}