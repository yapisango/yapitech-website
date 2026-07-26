# YEP-001 — Model the Business, Not the Screen

> *"Software should reflect how a business operates, not how a screen is arranged."*

---

## Status

**Accepted**

---

## Category

Engineering Principle

---

## Overview

Software exists to solve business problems.

Therefore, software should model the real-world business rather than the layout of user interfaces, reports, or database tables.

At YapiTech, we begin every project by identifying the core business entities, their relationships, and the events that connect them.

Only after understanding the business do we design the user interface and implementation.

---

# Problem

A common mistake in software development is designing the database or backend around the user interface.

For example:

```
Admission Form

↓

One Database Table

↓

One API

↓

One Screen
```

While this may work initially, it often creates rigid systems that become difficult to extend as business requirements evolve.

---

# Principle

Always identify the business before identifying the software.

Model:

- people
- organisations
- products
- services
- events
- relationships

These business concepts become the foundation of the software.

---

# Why It Matters

Businesses change.

User interfaces change.

Reports change.

Technologies change.

The business itself changes much more slowly.

By modelling the business rather than the interface, software becomes easier to extend without redesigning its core architecture.

---

# Business Example

A school does not consist of screens.

It consists of:

- Schools
- Learners
- Guardians
- Teachers
- Grades
- Sections
- Academic Years
- Enrolments
- Attendance Events

Those concepts exist whether software exists or not.

The software should therefore model those concepts directly.

---

# Software Example

Instead of designing:

```
Learner Registration Form

↓

Learner Table
```

We identify the real business entities:

```
School

↓

Academic Year

↓

Grade

↓

Section

↓

Learner

↓

Guardian

↓

Enrolment
```

The user interface simply becomes one way of interacting with this business model.

---

# Common Mistakes

Avoid:

- Designing databases around screens.
- Creating one table for each form.
- Combining unrelated business concepts into one entity.
- Allowing UI layouts to dictate backend architecture.

---

# Relationship to Other Principles

This principle directly supports:

- YEP-002 — Separate Identity from State
- YEP-003 — Preserve History
- YEP-005 — Engineer for Change

---

# Related Standards

Examples of standards influenced by this principle include:

- YTS-001 — Business Entity Naming
- YTS-010 — Model Repeating UI as Data

---

# Real YapiTech Example

The EduCare Management System applies this principle throughout its architecture.

Rather than beginning with registration screens, the system first models:

- School
- Academic Year
- Grade
- Section
- Learner
- Guardian
- Enrolment

This business model provides the foundation upon which APIs, databases, and user interfaces are built.

---

# Key Takeaways

- Build software around the business.
- Treat user interfaces as views of the business.
- Model entities before designing screens.
- Let business concepts drive architecture.
- Technology should support the business—not define it.

---

## Principle in Practice

Before writing code, ask:

- Am I modelling the business or the screen?
- Would this entity exist if there were no software?
- Does this design reflect how the organisation actually operates?
- Will this model still make sense if the user interface changes?