---
marp: true
theme: default
footer: "[tsevdos.me](https://tsevdos.me/) · [@tsevdos](https://twitter.com/tsevdos)"
paginate: true
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

<!-- 1. **Spot it** — a rule of thumb / smell to notice
2. **Understand it** — what's actually wrong, and why
3. **Fix it** — the refactor, and why it's better -->

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
- **More code** to read, test, and maintain

---

# ✅ The Fix

- **Compute / derive** the value directly in the render body
- Wrap in **`useMemo`** only if the calculation is genuinely expensive

---

# ✅ Why this is better

- **Single source of truth** — derived values are always correct by construction
- **Impossible** to have out-of-sync state
- **Zero extra renders** — no state cascade
- **Zero dependency arrays** to maintain
- **Better performance** (fewer re-renders)
- **Less code** — easier to understand, easier to maintain, simplifies debugging

---

# 🎯 Rule of thumb

> If you can calculate it, don't store it.

---

# State Management Surprises

## 🎬 Live demo: Profile form

---

# State Management Surprises

## 🚀 Exercise: User Cart

---

# State Management Surprises

## 🎬 Live demo: App Layout

---

# 🔍 Spot the problem

- 🕳️ Prop drilling!
- Passing props through **multiple component layers**
- Intermediate components don't use the props — just forward them
- Creates tight coupling and maintenance nightmares


```
App → Header → HeaderActions → UserInfo → Profile
      ↓ user    ↓ user        ↓ user      ↓ user
```

> Ask❓ "Do all these intermediate components use the specific props?" — if no, use a global store

---

# ❌ Why is it a problem

- Intermediate components become coupled to data they neither own nor use
- Adding or renaming a prop means updating every pass-through component
- Component APIs grow with details unrelated to their actual responsibilities
- The connection between the data's owner and its consumer becomes harder to follow
- This is mainly a **maintainability** problem; prop drilling alone does not necessarily hurt performance

---


# ✅ The Fix

- Put genuinely shared data in **global state** (Context API or global store)
- Read it where it is needed with a custom hook or store selector
- Keep props for data that belongs to a nearby component relationship

---

# ✅ Why this is better

- Intermediate components no longer carry data they don't use
- Consumers declare what shared data they depend on
- Shared state has a clear owner and is easier to change


---

# 🎯 Rule of thumb

> Use props for local, explicit data flow; use Context or a store when distant parts of the tree need the same shared state.

---

# 🔑 Key takeaways

1. **Derive, don't store** — if it can be calculated, don't `useState` it
2. **Prop drilling is a code smell** — fix it early before it spreads

<!--
# TODO!!!

2. Add Prop drilling exercise
3. Add Effects surprices section
4. On the data-fetching - React Server Components!
6. Maybe add a resources section ?
-->


---

# 🙏 That's all folks

### Questions / Discussions?
