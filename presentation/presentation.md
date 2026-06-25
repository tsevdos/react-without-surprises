---
marp: true
theme: default
footer: "[tsevdos.me](https://tsevdos.me/) · [@tsevdos](https://twitter.com/tsevdos)"
---

<!-- ![bg right:30%](https://avatars1.githubusercontent.com/u/175707) -->

# React Without Surprises: <br />Building Predictable Applications

---

# 📋 Agenda

- State and Derived state
- Prop Drilling

---

# 🎓 Workshop at CityJS Athens 2026

- State and Derived state
- Prop Drilling
- Complex components
- Hooks anti-patterns
- Duplication (when to avoid it, and when not)
- You might not need useEffect
- And many more...

---

# 🏠 Housekeeping

Feel free to interrupt me for:

- questions
- relevant comments

---

# 🤖 All code examples are:

- Real-world (realistic) examples
- Fully functional
- Production ready

---

# 🧮 What is derived state?

- Values **computed / calculated** from existing state
- No need for separate `useState` — just derive it!
- No need for `useEffect` syncs 

---

# ✅ Why use derived state

- Easier to understand code (single source of truth)
- Less state (`useState`) and side effects (`useEffect`)
- Cleaner components and UI
- Prevents bugs from out-of-sync state
- Better performance (fewer re-renders)

---

# 🎬 Live demo: Todo App

---

# 🎬 Live demo: Profile Form

---

# 🎯 Rule of thumb

> If you can calculate it from existing state/props,
> **don't store it in state**

---

# 🕳️ What is prop drilling?

- Passing props through **multiple component layers**
- Intermediate components don't use the props — just forward them
- Creates tight coupling and maintenance nightmares
<br />
```
App → Header → HeaderActions → UserInfo → Profile
         ↓ user    ↓ user        ↓ user      ↓ user
```

---

# ⚠️ Common signs of prop drilling

- Props passed through 3+ component levels
- Components accepting props they don't use
- Adding a new prop requires editing many files
- Renaming a prop becomes a refactoring nightmare
- "Why does this component need `user`?"

---

# 🛠️ How to fix it

- **Component composition** (children pattern)
- **React Context API** (built-in)
- **Global state management libraries** (Zustand, Jotai, Redux)

---

# 🎬 Live demo: App layout

---

# ⚖️ When to use Global state vs Props

| Use Props | Global state |
|-----------|-------------|
| 1-2 levels deep | 3+ levels deep |
| Few consumers | Many consumers |
| Explicit data flow | Shared/global data |

---

# 🔑 Key takeaways

1. **Derive, don't store** — if it can be calculated, don't `useState` it
2. **Prop drilling is a code smell** — fix it early before it spreads

---

# 🙏 That's all folks

### Questions / Discussions?
