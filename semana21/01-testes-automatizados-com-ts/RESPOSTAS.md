### Exercício 1

a)

```
interface User {
	name: string
	balance: number
}
```

b)

```
function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value
		}
	}
	return undefined
}
```

### Exercício 2

a)

```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 40)

	expect(result).toEqual({
		name: "Astrodev",
		balance: 60
	})
})
```

b)

```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)

	expect(result).toEqual({
		...user,
		balance: 0
	})
})
```

c)

```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 50)

	expect(result).not.toBeDefined()
})
```
