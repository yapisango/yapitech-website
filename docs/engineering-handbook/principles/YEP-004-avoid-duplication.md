# YEP-004 — Avoid Duplication

> *"Every piece of business knowledge should have one authoritative source."*

---

## Status

**Accepted**

---

## Category

Engineering Principle

---

## Overview

Duplication is one of the primary causes of inconsistent software.

When the same business knowledge exists in multiple places, those copies eventually drift apart, creating bugs, confusion, and unnecessary maintenance.

At YapiTech, we strive to ensure that every important piece of information has a single, authoritative source.

Duplication is not limited to source code. It includes business rules, data, documentation, APIs, user interfaces, and architectural decisions.

---

# Problem

As software grows, teams often solve problems by copying existing solutions.

Initially this appears faster, but over time duplicated logic becomes difficult to maintain.

A single business rule may exist in:

- the frontend
- the backend
- the database
- reports
- documentation

When the rule changes, every copy must be updated.

Missing even one creates inconsistent behaviour.

---

# Principle

Every important business concept should have one source of truth.

Software should reference existing knowledge rather than recreating it.

Duplication increases maintenance costs and introduces inconsistency.

---

# Why It Matters

A business should never have conflicting versions of the same information.

Examples include:

- Different calculations for school fees.
- Multiple definitions of learner status.
- Different attendance rules in separate modules.
- Two APIs implementing the same business rule differently.

Consistency improves reliability, maintainability, and trust.

---

# Types of Duplication

YapiTech recognises several forms of duplication:

## Code Duplication

Repeating implementation logic instead of creating reusable components or services.

---

## Data Duplication

Storing the same information in multiple locations.

Example:

- Storing a learner's current grade in both the Learner and Enrolment entities.

---

## Business Rule Duplication

Implementing the same rule in multiple places.

Example:

Calculating attendance percentages differently across modules.

---

## Documentation Duplication

Explaining the same engineering decision in multiple documents instead of referencing the original source.

---

## UI Duplication

Building multiple components that solve the same problem independently.

Instead, create reusable UI components.

---

## API Duplication

Creating multiple endpoints that perform the same business operation.

---

## Architectural Duplication

Designing different systems that solve identical problems in inconsistent ways.

---

# Business Example

A school's grading policy should exist once.

Every report, API, teacher portal, and learner dashboard should reference that single policy.

Changing the policy should require updating only one location.

---

# Software Example

Avoid:

```
Frontend

↓

Attendance Calculation

Backend

↓

Attendance Calculation

Reports

↓

Attendance Calculation
```

Prefer:

```
Attendance Service

↓

Frontend

↓

Backend

↓

Reports

↓

Analytics
```

One implementation.

Multiple consumers.

---

# Common Mistakes

Avoid:

- Copying business logic.
- Copying validation rules.
- Copying SQL queries.
- Copying UI components.
- Copying documentation instead of linking to the original.

---

# Relationship to Other Principles

This principle reinforces:

- YEP-001 — Model the Business, Not the Screen
- YEP-003 — Preserve History
- YEP-005 — Engineer for Change

---

# Related Standards

Examples include:

- YTS-010 — Model Repeating UI as Data
- YTS — Component Reuse
- YTS — API Design
- YTS — Shared Business Services

---

# Real YapiTech Example

On the YapiTech Website, repeating UI elements such as products, engineering principles, services, and portfolio items are represented as structured data and rendered through iteration.

Instead of duplicating JSX for each item, components consume shared data sources, making the interface easier to maintain and extend.

Similarly, within EduCare, learner information exists in one place, while enrolments, attendance, and guardian relationships reference the learner rather than duplicating learner data.

---

# Key Takeaways

- Every business rule should have one source of truth.
- Reuse knowledge rather than copying it.
- Duplicate references—not information.
- Reduce maintenance by reducing duplication.
- Consistency is more valuable than convenience.

---

# Principle in Practice

Before writing code, ask:

- Does this information already exist?
- Am I creating another source of truth?
- Could this be reused instead?
- Will future changes require updating multiple places?
- Can I reference an existing solution rather than duplicate it?