<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep visitor appearance and language in a root-level React provider with browser storage read after hydration, so both pages share settings without server/client mismatch.
- Keep the site copy translations in a shared client-safe module, so navigation, content, and chat labels use the same language setting.
