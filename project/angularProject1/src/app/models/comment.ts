export class Comment {
     id: number
     postId: number
     name: string
     email: string
     body: string
    constructor(id: number, postId: number, name: string, email: string, body: string) {
        this.id = id
        this.postId = postId
        this.name = name
        this.email = email
        this.body = body
    }


    toString(): string {
        return `Comment { id: ${this.id}, postId: ${this.postId}, name: ${this.name}, email: ${this.email}, body: ${this.body} }`
    }



}
