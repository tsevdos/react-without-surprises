---
marp: true
theme: default
footer: "[tsevdos.me](https://tsevdos.me/) · [@tsevdos](https://twitter.com/tsevdos)"
---

<!-- ![bg right:30%](https://avatars1.githubusercontent.com/u/175707) -->

# React Without Surprises: <br />Building Predictable Applications

---

# 📋 Agenda

- State Management Surprises
- Effects Surprises
- Component Design Surprises
- Rendering & Performance Surprises
- Data Flow & Architecture Surprises

<!-- OLD
- Prop Drilling
- Complex components
- Hooks anti-patterns
- Duplication (when to avoid it, and when not)
- You might not need useEffect
- And many more...
-->

---

# 🏠 Format

For each topic:

1. See the **bad version** running — predict what happens
2. Discuss **why** it happens (tie back to React's mental model)
3. **Refactor** it together
4. Apply what we learned on **exercises!**

##### \* Feel free to interrupt me at any time for questions or relevant comments

---

# 🤖 All code examples are:

- Real-world (realistic) examples
- Fully functional
- Production ready

---

# State Management Surprises

---

# State Management Surprises

## 🎬 Live demo: Todo app

---

# 🔍 Spot the problem

- Multiple `useState` calls for values that are fully **calculable** from other state or props
- Multiple `useEffect` that just keep the state "in sync"

> Ask❓ "Can I compute this from what I already have?" — if yes, don't store it

---

# ❌ Why is it a problem

- **Two sources of truth** — stored value can drift from the calculated one
- **Extra renders** — every derived state update triggers a re-render
- **Dependency arrays** to maintain and keep correct by hand
- **Bugs show up as "stale UI"** — one step behind the real data
- **More code** to read, test, and maintain

---

# ✅ The Fix

- **Compute / derive** the value directly in the render body
- Wrap in `useMemo` only if the calculation is genuinely expensive

---

# ✅ Why the is better

- **Single source of truth** — derived values are always correct by construction
- **Impossible** to have out-of-sync state
- **Zero extra renders** — no state cascade
- **Zero dependency arrays** to maintain
- **Better performance** (fewer re-renders)
- **Less code** — often 10x fewer lines

---

# 🎯 Rule of thumb

> If you can calculate it, don't store it.

---

# State Management Surprises

## 🎬 Live demo: Profile form

<!--

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

| Use Props          | Global state       |
| ------------------ | ------------------ |
| 1-2 levels deep    | 3+ levels deep     |
| Few consumers      | Many consumers     |
| Explicit data flow | Shared/global data |

---

# 🔑 Key takeaways

1. **Derive, don't store** — if it can be calculated, don't `useState` it
2. **Prop drilling is a code smell** — fix it early before it spreads
--->

---

# 🙏 That's all folks

### Questions / Discussions?
