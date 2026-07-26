import { engineeringProducts } from "../data/engineeringProducts";

export default function EngineeringPhilosophy() {
  return (
    <section className="engineering-philosophy">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Engineering Philosophy
          </span>

          <h2>
            Software Should Evolve With the Business
          </h2>
        </div>

        <blockquote className="philosophy-quote">
          <p>
            "We design software that models real businesses,
            preserves history, adapts to change,
            and communicates through well-defined business events.
          </p>

          <p>
            Every architectural decision should reduce future
            complexity rather than introduce it.
          </p>

          <p>
            We believe software should evolve with the business,
            not force the business to evolve around the software."
          </p>
        </blockquote>

        <div className="philosophy-explanation">
          <p>
            At YapiTech, software engineering begins long before the
            first line of code is written.
          </p>

          <p>
            We start by understanding the business, identifying its
            challenges, and designing an architecture that reflects how
            the organisation actually operates.
          </p>

          <p>
            By documenting our architectural decisions and designing for
            flexibility from the beginning, we create software that
            remains maintainable, scalable and valuable as business
            requirements evolve.
          </p>
        </div>

        <div className="philosophy-foundation">

          <h3>
            One Philosophy. Every Product.
          </h3>

          <p>
            Our engineering philosophy is not a statement for a single
            page. It guides every product we design, every architectural
            decision we document, and every line of production code we
            write.
          </p>

          <div className="product-flow">

            {products.map((product, index) => (

                <div
                key={product.id}
                className="product-flow-item"
                >

                <div className="product-item">

                    <h4>{product.name}</h4>

                    <small>{product.category}</small>

                </div>

                {index < products.length - 1 && (
                    <span className="flow-arrow">↓</span>
                )}

                </div>

            ))}

            </div>

        </div>

      </div>
    </section>
  );
}