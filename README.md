# ΩbscurAI Site Improvements

Polished static pages for the obscurai.io site. Showcase sealed mathematical frameworks and black-box agents. Monetize via three doors without revealing trade secrets.

## Pages

- **index.html** — Hub linking all monetization and showcase pages.
- **monetize-hub.html** — Central overview of Witness / Use / Hold doors, full agent catalogue, and sealed process.
- **booking.html** — Book an agent rental or briefing: pick agent, tier (per use / hourly / NDA) and contact; opens a prefilled email to vault@obscurai.io. No backend.
- **book-agent.html** — Streamlined booking funnel with popular agents and direct CTAs.
- **agent-catalogue.html** — Full agent catalogue with filters.
- **research-portfolio.html** — Aggregated sealed showcases (sickle cell, AFCD, FiiX, etc.) with sponsorship paths.
- **engagement.html** — Brief → Scope → Run → Deliver process.
- **pricing.html** — Witness / Use / Hold comparison table, matching the main site pricing.
- **breakthroughs.html** — Catalogue of current sealed breakthroughs and doors.
- **novel-breakthroughs.html** — Hub for new sealed frames and templates.
- **information-lattice.html** — Information Lattice sealed showcase (optimal information pathways, entropy balancing, signal preservation).
- **scale-lattice.html** — Scale Lattice sealed showcase (multi-scale hierarchical structures, scaling laws, renormalization-style mappings).
- **coherence-lattice.html** — Coherence Lattice sealed showcase (coherent structures, synchronized components, phase relations, collective modes).
- **projection-lattice.html** — Projection Lattice sealed showcase (optimal embeddings, information-preserving reductions).
- **sealed-prime-lattice.html** — Prime Lattice sealed showcase.
- **zero-lattice.html** — Zero Lattice showcase (13 kinds of zero).
- **quantum-lattice.html** — Quantum Lattice sealed showcase (superposition-like states, interference, measurement collapses).
- **resonance-lattice.html** — Resonance Lattice sealed showcase.
- **topology-lattice.html** — Topology Lattice sealed showcase (persistent connectivity, voids, tunnels, and global topological invariants).
- **symmetry-lattice.html** — Symmetry Lattice sealed showcase (symmetry groups, invariants, equivariant structures).
- **lattice-atlas.html** — Lattice Atlas: start from your question; sealed frames with proof class and Use price.
- **proof-classes.html** — What every claim label means and how buyers check results without the method.
- **written-scope.html** — What a buyer receives before any charge.
- **manifold-lattice.html**, **spectral-lattice.html**, **duality-lattice.html**, **entropy-lattice.html**, **causal-lattice.html**, **attractor-lattice.html**, **omega-lattice.html** — Lattice family sealed showcases.
- **shadow-insight.html** — Shadow Insight Lattice sealed showcase.
- **sterling-cypher.html** — Sterling Cypher sealed showcase (ancient text structure).
- **the-frames-work.html** — The Frames Work sealed door (THE FRAMES agent crew).
- **tower-prime.html** — Tower Prime, the central apparatus (live tools, sealed doors, waitlists).
- **triumvirate.html** — The Triumvirate, ΩbscurAI’s own LLM (sealed door).
- **mixwright.html** — MIXWRIGHT agent showcase.
- **frame-workshop.html** — Workshop for rapidly creating and monetizing new frame pages.
- **why-sealed.html** — Core insight on the sealed advantage.
- **new-breakthrough-showcase.html** — Reusable template for new research showcases.
- **next-breakthrough.html** — Ready-to-customize template.
- **epoch.css** — Dark theme matching live site (gold/orange gradients, cards, doors).

## Design & Principles

Dark theme, sealed doors language, three-door monetization (Witness / Use / Hold). Public claims + proof class only. Results and reports delivered. Methods never disclosed. Nothing charged before written scope.

## Deployment

Deploy to Cloudflare Pages. Link from live /tower/, /vault/, or navigation. Contact: [vault@obscurai.io](mailto:vault@obscurai.io)

Methods stay sealed. Results delivered.

## Novel Insight

The sealed model is a compounding flywheel. Each new showcase page is a self-contained revenue door: Witness builds pipeline, Use captures immediate outcome revenue, Hold unlocks exclusivity under NDA. Templates turn a framework claim into a monetizable page in hours so the private mathematics compounds while clients pay only for results. No IP leakage, scalable monetization. New frames accelerate the flywheel without diluting the private edge.

## Deploy

Static site. No build step.

- **Cloudflare Pages:** connect the repo, framework preset "None", build command empty, output directory `/` (root). Production branch `main`.
- **Vercel:** import the repo, framework preset "Other", build command empty (override off), output directory `.` (root). No serverless functions.
- `cashapp-links.js` has an empty cashtag; no page loads it until a new cashtag is set.
