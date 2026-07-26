# YEP-002 — Separate Identity from State

> *"People remain the same. Their roles, relationships, and responsibilities change over time."*

---

## Status

**Accepted**

---

## Category

Engineering Principle

---

## Overview

One of the most common causes of rigid software is confusing **who or what something is** with **its current state**.

At YapiTech, identity and state are treated as separate concepts.

Identity represents the permanent existence of an entity.

State represents information that changes throughout that entity's lifecycle.

Separating the two allows software to evolve naturally while preserving historical accuracy.

---

# Problem

Many systems combine permanent information with temporary information in a single record.

Examples include:

- A learner permanently assigned to one grade.
- An employee permanently assigned to one department.
- A customer permanently assigned to one address.
- A teacher permanently assigned to one class.

When those things change, developers are forced to overwrite data or redesign the system.

---

# Principle

Model identity separately from the information that changes over time.

Identity should remain stable.

State should evolve through relationships, assignments, enrolments, or events.

---

# Why It Matters

Businesses change continuously.

People are promoted.

Learners progress through grades.

Teachers move between classes.

Customers change addresses.

Employees change departments.

The software should record these changes without losing the identity of the underlying person or entity.

---

# Business Example

A learner is always the same learner.

What changes includes:

- Academic Year
- Grade
- Section
- Classroom
- Attendance
- Performance
- Guardians
- Contact Information

Those changing attributes should not redefine the learner's identity.

---

# Software Example

Avoid:

```text
Learner
├── Grade
├── Section
├── AcademicYear
```

Instead:

```text
Learner

↓

Enrolment

↓

Academic Year

↓

Grade

↓

Section
```

The learner remains constant.

Enrolments record the learner's changing academic journey.

---

# Common Mistakes

Avoid:

- Updating historical records instead of creating new ones.
- Embedding changing relationships inside permanent entities.
- Using a person's current role as part of their identity.
- Deleting historical assignments when changes occur.

---

# Relationship to Other Principles

This principle strengthens:

- YEP-001 — Model the Business, Not the Screen
- YEP-003 — Preserve History
- YEP-005 — Engineer for Change

---

# Related Standards

Examples include:

- YTS — Entity Relationship Design
- YTS — Foreign Key Standards
- YTS — Historical Data Modelling

---

# Real YapiTech Example

Within the EduCare Management System:

A learner is created once.

The learner's movement through different academic years, grades, and sections is recorded through **Enrolments**, not by modifying the learner's identity.

Similarly, guardians are modelled as independent people connected through **Guardian Relationships**, allowing parents, grandparents, siblings, foster parents, or legal guardians to be represented consistently without changing the learner entity itself.

---

# Key Takeaways

- Identity should remain stable.
- State should evolve independently.
- Relationships capture change.
- Preserve identity throughout the lifetime of an entity.
- Design software to reflect how organisations actually operate.

---

# Principle in Practice

Before writing code, ask:

- Is this information permanent or temporary?
- Am I changing a person or changing their current assignment?
- Would overwriting this value destroy business history?
- Should this change be represented by a relationship instead?
- Can this design support future changes without redesign?