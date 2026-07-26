# Engineering Principles (YEP)

> *"Principles shape thinking. Standards shape implementation."*

---

# Overview

YapiTech Engineering Principles (YEPs) define the timeless ideas that guide every engineering decision made within the company.

Unlike programming languages, frameworks, databases, or cloud providers, engineering principles remain stable over time.

They influence how we analyse business problems, design software, model data, and make architectural decisions.

Every YapiTech product should reflect these principles regardless of the technology stack used.

---

# Why Engineering Principles Exist

Software engineering is filled with decisions.

Should this be one table or two?

Should this feature overwrite data or preserve history?

Should this relationship be hardcoded or modelled?

Should we optimise for today's requirement or tomorrow's change?

Engineering Principles provide consistent answers to these questions.

Rather than relying on individual preferences, YapiTech engineers make decisions using a shared set of principles.

---

# Principles Before Standards

Engineering Principles describe **how we think**.

Engineering Standards describe **how we build**.

For example:

**Engineering Principle**

> Engineer for Change.

↓

**Engineering Standard**

> Model Repeating UI as Data.

↓

**Implementation**

```jsx
products.map(product => ...)
```

The principle explains *why*.

The standard explains *how*.

The code demonstrates *the implementation*.

---

# Characteristics of a Good Engineering Principle

Every Engineering Principle should be:

- Technology independent
- Business focused
- Easy to understand
- Applicable across every product
- Timeless
- Actionable

A principle should still make sense ten years from now.

---

# Current Engineering Principles

The following principles currently define engineering at YapiTech:

- YEP-001 — Model the Business, Not the Screen
- YEP-002 — Separate Identity from State
- YEP-003 — Preserve History
- YEP-004 — Avoid Duplication
- YEP-005 — Engineer for Change
- YEP-006 — Multi-Tenant by Design
- YEP-007 — Small, Independent Components
- YEP-008 — Documentation is Part of the Product

These principles will continue to evolve as YapiTech grows.

---

# Relationship to the Engineering Handbook

Engineering Principles influence:

- Engineering Standards (YTS)
- Architecture Decision Records (ADR)
- Frontend Standards
- Backend Standards
- Database Standards
- Code Reviews
- Software Architecture
- Product Design

Every engineering document in this handbook ultimately traces back to one or more Engineering Principles.

---

# Continuous Improvement

Engineering Principles are expected to remain stable.

However, as YapiTech gains new experience, discovers better practices, or solves increasingly complex problems, new principles may be added.

Existing principles should only change when doing so improves the long-term engineering culture of the company.

---

# Next Chapter

Continue to:

**YEP-001 — Model the Business, Not the Screen**

The first engineering principle explains why software should model real businesses rather than user interfaces or database structures.