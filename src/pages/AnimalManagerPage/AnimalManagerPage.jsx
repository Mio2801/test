import React, { useEffect, useState } from "react"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './AnimalManagerStyle.scss'
import PageLoading from '../loading';
import { useDispatch, useSelector } from 'react-redux';
import RenderTable from "./RenderTable";
import { getSpeciesAction } from "../../stores/species/actionSpecies";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";


const AnimalManagerPage = () => {
    const { loading, pagination } = useSelector(state => state.species);
	const [searchInput, setsearchInput] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSpeciesAction({
			page: 1,
			itemsPerPage: 10,
			search: "",
		}))
	}, [dispatch])
	
	const handleSearchChange = (event) => {
		setsearchInput(event.target.value);
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.itemsPerPage,
			search: event.target.value,
		}));
	}
    return(
        <>
            <HeaderComponent />
            <div className="d-flex" style={{height:'622px'}}>
                <NavbarComponent/>
                <div className="form_species">
					<div className=''>
						<div className='d-flex align-items-center w-100 pb-4'>
							<div className='icon_animal'>
                                <FontAwesomeIcon icon="fa-solid fa-otter" style={{color: "rgb(218,42,28)",}} />
                            </div>
							<div style={{paddingLeft:'8px', fontSize:'20px'}}><b>Loài nguy cấp quý hiếm</b></div>
						</div>
                        <div className="d-flex justify-content-between" style={{maxWidth:'100%'}}>
                            <div className="search_bar">
                                <FontAwesomeIcon className="pt-1" icon="fa-solid fa-magnifying-glass" style={{color: "#494d55", marginTop:'9px', position:'absolute', marginLeft:'12px'}} />
                                <input 
									type="search" 
									placeholder="Tìm kiếm theo tên" 
									id="search_bar" 
									onChange={handleSearchChange}
									value={searchInput}
								/>
                            </div>
                            <Link className="add_btn bg-danger" style={{}} to='/auth/create'>+ Thêm mới</Link>
                        </div>
                        <div className='tableCustom'>
							<div className='table-responsive'>
								{loading && <PageLoading />}
								<table className="table table-hover">
									<thead>
										<tr>
											<th className='text-start'>Tên</th>
											<th className='text-start'>Tên khoa học</th>
											<th className='text-start'>Giới</th>
											<th className='text-start'>Ngành</th>
											<th className='text-start'>Lớp</th>
											<th className='text-start'>Bộ</th>
											<th className='text-start'>Họ</th>
											<th className='text-start'>Chi</th>
											<th className='text-center col' style={{fontSize :'10px', minWidth:'100px'}}>Hành động</th>
										</tr>
									</thead>
									<RenderTable />
								</table>
							</div>
						</div>
						<Pagination 
							searchInput={searchInput}
						/>
					</div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}

export default AnimalManagerPage