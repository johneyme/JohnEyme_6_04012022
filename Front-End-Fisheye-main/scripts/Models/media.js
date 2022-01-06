class Media {
    constructor(data) {
        this._id = data.media.id
        this._photographerId = data.media.photographerId
        this._title = data.media.title
        this._image = data.media.image
        this._likes = data.media.likes
        this._date = data.media.date
        this._price = data.media.price
    }

    get id() {
        return this._id
    }
    get photographerId() {
        return this._photographerId
    }
    get title() {
        return this._title
    }
    get image() {
        return this._image
    }
    get likes() {
        return this._likes
    }
    get date() {
        return this._date
    }
    get price() {
        return this._price
    }



}