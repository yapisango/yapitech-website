# YEP-008 — Documentation is Part of the Product

> *"Knowledge should outlive the engineer who created it."*

---

## Status

**Accepted**

---

## Category

Engineering Principle

---

## Overview

Software is more than source code.

Architecture, business rules, design decisions, standards, and engineering knowledge are all essential parts of a software product.

At YapiTech, documentation is treated as a core deliverable rather than an optional task completed after development.

Good documentation enables software to remain understandable, maintainable, and valuable long after its original authors have moved on.

---

# Problem

Many software projects rely on undocumented knowledge.

Critical decisions exist only in:

- conversations
- emails
- meeting notes
- the memories of individual developers

As teams change, this knowledge is lost.

Future engineers are forced to rediscover the same solutions, increasing development time and introducing unnecessary risk.

---

# Principle

Document engineering knowledge as it is created.

Documentation should explain:

- what was built
- why it was built
- the alternatives considered
- how future engineers should extend it

Good documentation preserves organisational knowledge.

---

# Why It Matters

Clear documentation provides:

- Faster onboarding
- Better collaboration
- Consistent engineering practices
- Easier maintenance
- Improved decision-making
- Reduced dependency on individuals

Documentation transforms personal knowledge into organisational knowledge.

---

# Business Example

A school maintains records of:

- policies
- procedures
- curricula
- regulations

Without documentation, the school could not operate consistently.

Software engineering is no different.

---

# Software Example

Instead of relying on memory:

```
Developer

↓

Undocumented Decision
```

Prefer:

```
Architecture Decision

↓

Engineering Handbook

↓

Engineering Standards

↓

Source Code
```

Knowledge becomes permanent and accessible to the entire team.

---

# Common Mistakes

Avoid:

- Treating documentation as optional.
- Explaining only *how* instead of *why*.
- Allowing documentation to become outdated.
- Keeping important knowledge inside individual developers' heads.
- Writing documentation only after problems occur.

---

# Relationship to Other Principles

This principle supports every other Engineering Principle.

Without documentation:

- Principles are forgotten.
- Standards become inconsistent.
- Architecture decisions are repeated.
- Engineering culture cannot scale.

---

# Related Standards

Examples include:

- YTS — Documentation Standards
- YTS — ADR Writing Guidelines
- YTS — README Standards
- YTS — API Documentation Standards

---

# Real YapiTech Example

YapiTech maintains an Engineering Handbook that includes:

- Engineering Philosophy
- Engineering Principles (YEP)
- Engineering Standards (YTS)
- Architecture Decision Records (ADR)
- Frontend Standards
- Backend Standards
- Database Standards

As EduCare evolves, every major architectural decision is documented alongside the code, ensuring that future engineers understand not only how the system works, but why it was designed that way.

---

# Key Takeaways

- Documentation is part of the product.
- Record decisions while they are fresh.
- Explain *why*, not just *how*.
- Preserve engineering knowledge for future teams.
- Build software that future engineers can confidently extend.

---

# Principle in Practice

Before completing a feature, ask:

- Have I documented the important decisions?
- Will another engineer understand why this was built?
- Is the README up to date?
- Does this change require a new ADR or YTS?
- Am I leaving the project easier to understand than I found it?

---

## Architect's Note

Every line of code has a lifespan.

Every engineering decision has a legacy.

By documenting our work, we ensure that YapiTech's knowledge grows alongside its software, creating products that remain understandable, maintainable, and valuable for years to come.