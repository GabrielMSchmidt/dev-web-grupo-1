import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Slider,
} from "@mui/material";
import { api } from "../../utils/Api";
import { Navbar } from "../../components/Navbar";
import { CardList } from "../../components/CardList";
import {
  ProdutosContainer,
  Titulo,
  FiltroPaper,
  BoxFiltros,
  BoxSlider,
  BoxPrecos,
  BoxProdutos,
} from "./style";

export const TodosProdutos = () => {
  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get("categoria");
  
  const [categorias, setCategorias] = useState([]);
  const [filtro, setFiltro] = useState(categoriaParam || "");
  const [faixaPreco, setFaixaPreco] = useState([0, 5000]);
  const [ordenar, setOrdenar] = useState("destaques");

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = await api.get('/categorias');
        setCategorias(data);
      } catch (err) {
        console.error('Erro ao carregar categorias:', err);
      }
    };

    fetchCategorias();
  }, []);

  const handlePrecoChange = (event, novoValor) => {
    setFaixaPreco(novoValor);
  };

  return (
    <>
      <Navbar />
      <ProdutosContainer>
        <Titulo>Todos os Produtos</Titulo>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <FiltroPaper elevation={4}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#0D70E0"
                gutterBottom
                textAlign="center"
              >
                Filtrar Produtos
              </Typography>

              <BoxFiltros>
                <TextField
                  select
                  label="Categoria"
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}
                  fullWidth
                  size="small"
                >
                  <MenuItem value="">Todas</MenuItem>
                  {categorias.map((categoria) => (
                    <MenuItem key={categoria.id} value={categoria.id}>
                      {categoria.nome}
                    </MenuItem>
                  ))}
                </TextField>

                <BoxSlider>
                  <Typography gutterBottom>Faixa de Preço (R$)</Typography>
                  <Slider
                    value={faixaPreco}
                    onChange={handlePrecoChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={5000}
                    step={100}
                    sx={{ color: "#0D70E0", mt: 1 }}
                  />
                  <BoxPrecos>
                    <Typography>R$ {faixaPreco[0]}</Typography>
                    <Typography>R$ {faixaPreco[1]}</Typography>
                  </BoxPrecos>
                </BoxSlider>

                <TextField
                  select
                  label="Ordenar por"
                  value={ordenar}
                  onChange={(e) => setOrdenar(e.target.value)}
                  fullWidth
                  size="small"
                >
                  <MenuItem value="destaques">Destaques</MenuItem>
                  <MenuItem value="preco_asc">Menor preço</MenuItem>
                  <MenuItem value="preco_desc">Maior preço</MenuItem>
                </TextField>
              </BoxFiltros>
            </FiltroPaper>
          </Grid>

          <Grid item xs={12} md={9}>
            <BoxProdutos>
              <CardList
                filtro={filtro}
                faixaPreco={faixaPreco}
                ordenar={ordenar}
              />
            </BoxProdutos>
          </Grid>
        </Grid>
      </ProdutosContainer>
    </>
  );
};

export default TodosProdutos;
