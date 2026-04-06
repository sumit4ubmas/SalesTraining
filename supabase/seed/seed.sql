insert into public.learning_paths (title, description, certificate_code, release_date)
values
  (
    'Enterprise Discovery Fundamentals',
    'Build stronger discovery and qualification conversations for mid-market and enterprise sales cycles.',
    'DISC-101',
    '2026-03-15'
  ),
  (
    'Negotiation and Value Framing',
    'Develop pricing confidence and stakeholder-based value mapping techniques.',
    'NEG-220',
    '2026-04-01'
  )
on conflict (certificate_code) do nothing;
