# YEP-003 — Preserve History

> *"Business history is an asset. Software should preserve it, not overwrite it."*

---

## Status

**Accepted**

---

## Category

Engineering Principle

---

## Overview

Every business tells a story.

Learners progress through grades.

Employees are promoted.

Customers place orders.

Teachers change classes.

Businesses grow through events that occur over time.

At YapiTech, software is designed to preserve that story rather than replace it.

Whenever practical, historical information should be recorded instead of overwritten.

---

# Problem

Many systems overwrite existing information whenever something changes.

Examples include:

- Updating a learner's grade.
- Changing an employee's department.
- Replacing a customer's address.
- Reassigning a teacher to another class.

While this keeps the current data accurate, it permanently destroys valuable business history.

---

# Principle

Never overwrite important business history.

Instead, represent change as new records, assignments, relationships or events.

History should explain **how the business arrived at its current state**.

---

# Why It Matters

Business decisions depend on historical information.

Without history it becomes impossible to answer questions such as:

- Which grade was this learner in last year?
- Which teacher taught this class?
- When did this employee change departments?
- Who was responsible at the time?
- How has the business evolved?

Preserving history supports reporting, auditing, analytics and future decision-making.

---

# Business Example

A learner progresses through school over many years.

The learner's identity remains constant.

Each academic year creates a new enrolment that records:

- Academic Year
- Grade
- Section
- Class Teacher
- Status

The previous year's enrolment remains untouched.

Together these records form the learner's academic history.

---

# Software Example

Avoid:

```text
Learner

Grade = Grade 8
```

Updating the learner record each year destroys history.

Prefer:

```text
Learner

↓

Enrolment (2026)

↓

Enrolment (2027)

↓

Enrolment (2028)
```

The learner stays the same.

History grows over time.

---

# Common Mistakes

Avoid:

- Updating historical records.
- Deleting completed assignments.
- Replacing previous relationships.
- Losing audit information.
- Treating time as if it does not exist.

---

# Relationship to Other Principles

This principle strengthens:

- YEP-001 — Model the Business, Not the Screen
- YEP-002 — Separate Identity from State
- YEP-005 — Engineer for Change

---

# Related Standards

Examples include:

- YTS — Audit Trail Standards
- YTS — Event Recording
- YTS — Historical Data Modelling

---

# Real YapiTech Example

EduCare Management System records:

- Academic enrolments
- Attendance events
- Guardian relationships
- Teacher assignments

rather than continuously updating a single record.

This allows schools to understand not only the current state of a learner but their complete educational journey.

---

# Key Takeaways

- History has business value.
- Record events rather than replacing them.
- Preserve completed assignments.
- Think in timelines rather than snapshots.
- Good software explains the past as well as the present.

---

# Principle in Practice

Before writing code, ask:

- Will this update destroy valuable history?
- Should this be a new record instead?
- Would the business ever need to know the previous value?
- Can this change be represented as an event?
- Am I preserving the organisation's story?