# YEP-005 — Engineer for Change

> *"The only constant in business is change. Great software welcomes it."*

---

## Status

**Accepted**

---

## Category

Engineering Principle

---

## Overview

Businesses evolve continuously.

New regulations emerge.

Customer expectations change.

Organisations grow.

Products expand.

Software that cannot adapt quickly becomes a liability.

At YapiTech, we engineer systems with change in mind from the very beginning.

Rather than building software solely for today's requirements, we design solutions that can accommodate tomorrow's opportunities with minimal disruption.

---

# Problem

Many systems are built around current assumptions.

Examples include:

- Assuming every learner has two parents.
- Assuming every grade has one class.
- Assuming there is only one school.
- Assuming a product will never expand.
- Assuming today's business process will never change.

As businesses evolve, these assumptions force expensive redesigns and increase technical debt.

---

# Principle

Design systems that are flexible enough to accommodate future change without requiring major architectural redesign.

Avoid embedding assumptions that limit future growth.

---

# Why It Matters

Every organisation changes.

Schools introduce new programmes.

Businesses launch new services.

Governments introduce new regulations.

Customers request new features.

Software should enable these changes—not resist them.

A well-engineered system evolves through configuration, extension, and new relationships rather than structural rewrites.

---

# Business Example

A school initially has one Grade 8 class.

Next year, enrolment increases.

The school now requires:

- Grade 8A
- Grade 8B
- Grade 8C

Because Sections are modelled independently from Grades, no database redesign is required.

The business grows naturally, and the software grows with it.

---

# Software Example

Avoid:

```text
Grade

↓

Classroom
```

Where every grade assumes exactly one class.

Prefer:

```text
Grade

↓

Section

↓

Learner
```

Now schools can create as many sections as needed without changing the architecture.

---

# Common Mistakes

Avoid:

- Hardcoding business assumptions.
- Limiting entities to current requirements.
- Embedding fixed relationships.
- Designing for a single customer when future growth is expected.
- Solving today's problem at the expense of tomorrow.

---

# Relationship to Other Principles

This principle builds upon:

- YEP-001 — Model the Business, Not the Screen
- YEP-002 — Separate Identity from State
- YEP-003 — Preserve History
- YEP-004 — Avoid Duplication

Together these principles create software that is naturally adaptable.

---

# Related Standards

Examples include:

- YTS-010 — Model Repeating UI as Data
- YTS — Configurable Business Rules
- YTS — Event-Driven Design
- YTS — Extensible Database Modelling

---

# Real YapiTech Example

The EduCare Management System demonstrates this principle throughout its architecture.

Examples include:

- Guardian Relationships supporting parents, grandparents, foster parents, and legal guardians.
- Sections modelled separately from Grades to support parallel classes.
- Enrolments recording a learner's academic journey across multiple years.
- Schools acting as independent tenants, allowing one platform to serve many institutions.

Similarly, the YapiTech Website models products, engineering principles, and services as structured data rather than hard-coded components, making future expansion straightforward.

---

# Key Takeaways

- Design for growth.
- Remove unnecessary assumptions.
- Build systems that evolve naturally.
- Prefer extension over redesign.
- Anticipate change rather than reacting to it.

---

# Principle in Practice

Before writing code, ask:

- What assumptions am I making?
- What happens if the business doubles in size?
- Can this design support future requirements?
- Am I solving only today's problem?
- Will future engineers be able to extend this easily?