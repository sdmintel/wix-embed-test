document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const industrySelect = document.getElementById('industry');
    const minInput = document.getElementById('minInvestment');
    const maxInput = document.getElementById('maxInvestment');
    const resultsDiv = document.getElementById('results');

    function filterAndDisplayFunders() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedIndustries = Array.from(industrySelect.selectedOptions).map(opt => opt.value);
        const minValue = Number(minInput.value) || 0;
        const maxValue = Number(maxInput.value) || Infinity;

        const filtered = FUNDERS_DATA.filter(funder => {
            const matchesSearch = funder.name.toLowerCase().includes(searchTerm);
            const matchesIndustry = selectedIndustries.length === 0 || 
                                  funder.industry.some(ind => selectedIndustries.includes(ind));
            const matchesRange = funder.minInvestment >= minValue && 
                                (maxValue === Infinity || funder.maxInvestment <= maxValue);
            return matchesSearch && matchesIndustry && matchesRange;
        });

        resultsDiv.innerHTML = filtered.map(funder => `
            <div class="funder-card">
                <h3><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>f</mi><mi>u</mi><mi>n</mi><mi>d</mi><mi>e</mi><mi>r</mi><mi mathvariant="normal">.</mi><mi>n</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow><mo>&lt;</mo><mi mathvariant="normal">/</mi><mi>h</mi><mn>3</mn><mo>&gt;</mo><mo>&lt;</mo><mi>p</mi><mo>&gt;</mo><mi>I</mi><mi>n</mi><mi>d</mi><mi>u</mi><mi>s</mi><mi>t</mi><mi>r</mi><mi>y</mi><mo>:</mo></mrow><annotation encoding="application/x-tex">{funder.name}&lt;/h3&gt;
                &lt;p&gt;Industry: </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">u</span><span class="mord mathnormal">n</span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span><span class="mord">.</span><span class="mord mathnormal">nam</span><span class="mord mathnormal">e</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">/</span><span class="mord mathnormal">h</span><span class="mord">3</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal">n</span><span class="mord mathnormal">d</span><span class="mord mathnormal">u</span><span class="mord mathnormal">s</span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.03588em;">ry</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span></span></span></span>{funder.industry.join(', ')}</p>
                <p>Investment: <span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mrow><mi>f</mi><mi>u</mi><mi>n</mi><mi>d</mi><mi>e</mi><mi>r</mi><mi mathvariant="normal">.</mi><mi>m</mi><mi>i</mi><mi>n</mi><mi>I</mi><mi>n</mi><mi>v</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi>m</mi><mi>e</mi><mi>n</mi><mi>t</mi></mrow><mo>−</mo></mrow><annotation encoding="application/x-tex">{funder.minInvestment} - </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">u</span><span class="mord mathnormal">n</span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span><span class="mord">.</span><span class="mord mathnormal">min</span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal">n</span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord mathnormal">es</span><span class="mord mathnormal">t</span><span class="mord mathnormal">m</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord mathnormal">t</span></span><span class="mord">−</span></span></span></span></span>{funder.maxInvestment}</p>
            </div>
        `).join('');
    }

    searchInput.addEventListener('input', filterAndDisplayFunders);
    industrySelect.addEventListener('change', filterAndDisplayFunders);
    minInput.addEventListener('input', filterAndDisplayFunders);
    maxInput.addEventListener('input', filterAndDisplayFunders);

    filterAndDisplayFunders();
});
