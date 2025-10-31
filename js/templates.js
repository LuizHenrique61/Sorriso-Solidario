// Templates SPA — Conteúdos das páginas

const templates = {
    home: `
        <section>
            <h2>Sobre Nós</h2>
            <p>A ONG Sorriso Solidário atua desde 2015 com projetos sociais voltados para campanhas de saúde bucal e emocional.</p>
        </section>
        <section>
            <h2>Missão, Visão e Valores</h2>
            <ul>
                <li><strong>Missão:</strong> Promover campanhas.</li>
                <li><strong>Visão:</strong> Um futuro onde todos tenham uma ótima saúde bucal.</li>
                <li><strong>Valores:</strong> Empatia e transparência.</li>
            </ul>
        </section>
        <section>
            <h2>Contato</h2>
            <p><strong>Telefone:</strong> (11) 99999-9999</p>
            <p><strong>E-mail:</strong> contato@ongsorrisosolidario.org</p>
            <p><strong>Endereço:</strong> Rua da Solidariedade, 123 – São Paulo/SP</p>
        </section>
    `,

    projects: `
        <section>
            <h2>Consultório Solidário Móvel</h2>
            <p>Oferecer avaliação, limpeza, restaurações e extrações simples gratuitas para comunidades carentes.</p>
        </section>
        <section>
            <h2>"Escovação de Ouro" nas Escolas</h2>
            <p>Realizar palestras lúdicas e distribuição de kits de higiene bucal em escolas públicas.</p>
        </section>
        <section>
            <h2>Como ajudar?</h2>
            <p><a href="#" data-page="volunteer">Clique aqui para se cadastrar como voluntário!</a></p>
        </section>
    `,

    volunteer: `
        <section>
            <h2>Seja um voluntário</h2>
            <form id="formCadastro">
                <fieldset>
                    <legend>Informações Pessoais</legend>

                    <label>Nome completo:</label>
                    <input type="text" id="nome" required>

                    <label>E-mail:</label>
                    <input type="email" id="email" required>

                    <label>CPF:</label>
                    <input type="text" id="cpf" required>

                    <label>Telefone:</label>
                    <input type="text" id="telefone" required>

                    <label>Data de nascimento:</label>
                    <input type="date" id="data" required>

                    <label>CEP:</label>
                    <input type="text" id="cep" required>

                    <label>Endereço:</label>
                    <input type="text" id="endereco" required>

                    <label>Cidade:</label>
                    <input type="text" id="cidade" required>

                    <label>Estado:</label>
                    <input type="text" id="estado" maxlength="2" required>
                </fieldset>

                <fieldset>
                    <legend>Informações Adicionais</legend>
                    <label>Por que deseja ser voluntário?</label>
                    <textarea id="interesse" required></textarea>

                    <label>
                        <input type="checkbox" id="aceito" required>
                        Aceito os termos da ONG.
                    </label>

                    <button type="submit">Enviar Cadastro</button>
                </fieldset>
            </form>
        </section>
    `
};
