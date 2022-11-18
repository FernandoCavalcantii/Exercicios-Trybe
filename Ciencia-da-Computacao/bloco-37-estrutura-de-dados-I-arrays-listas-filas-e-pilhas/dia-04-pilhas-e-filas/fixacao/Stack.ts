class Stack {
    private _data: number[] = []

    log() {
        let str_items = ""
        
            for (let i = 0; i < this._data.length; i += 1) {
                str_items += String(this._data[i])
                if (i + 1 < this._data.length) {
                    str_items += ", "
                }
            }
        
        return "Stack(" + str_items + ")"
    }

    length(): number {
        return this._data.length
    }

    is_empty(): boolean {
        return !Boolean(this.length())
    }

    push(n: number) {
        this._data.push(n)
    }

    pop(): number | null | undefined {
        if (this.is_empty()) {
            return null
        } 

        let removed_value = this._data.pop()
        return removed_value        
    }

    peek(): number | null {
        if (this.is_empty()) {
            return null
        }

        let value = this._data[this._data.length - 1]
        return value
    }

    clear() {
        this._data = []
    }
}

export default Stack

