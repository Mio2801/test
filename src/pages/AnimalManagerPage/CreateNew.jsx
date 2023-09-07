import React from "react"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import FooterComponent from "../../components/FooterComponent/FooterComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getPhylumAction, getSpeciesAction, getKingdomAction, getClassAction, getOrderAction, getFamilyAction, getGenusAction, createSpeciesAction } from "../../stores/species/actionSpecies"
import { useState } from "react"
import PageLoading from "../loading"
import { styled } from "styled-components"
import validateForm from '../../hook/validateForm';
import { AiOutlineClose } from "react-icons/ai";


const SharedStyle = styled(AiOutlineClose)`
	position: absolute;
	top: 10.5px;
	font-size: 20px;
	right: ${(props) => props.right}px;
	color: rgb(218, 42, 28);
	cursor: pointer;
`;



const CreateNew = (searchInput) => {
    const dispatch = useDispatch();
    const [dataCreateSpecies, setDataCreateSpecies] = useState({});
    const [errors, setErrors] = useState({});
    const { pagination} = useSelector(state => state.species);
    const navigate = useNavigate();

    
    const {dataKingdom, loadingKingdom} = useSelector((state) => state.kingdom); //giới
    const [showKingdom, setShowKingdom] = useState(false);
    const [selectedKingdom, setSelectedKingdom] = useState('');
    const [allKingdom, setKingdom] = useState(1);
    const handleInputClick = () => setShowKingdom(true);    //giới

    
    useEffect(()=>{
        dispatch(getKingdomAction())
    },[dispatch, allKingdom])
    const HandleListItemClick = (value) => {
		setSelectedKingdom(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowKingdom(false);
		setKingdom(value.uuid);
	}
    const clearDataKingdom = () => {
		setSelectedKingdom("");
		setKingdom("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
		}));
	}
    
    
    const {dataPhylum, loadingPhylum} = useSelector((state) => state.phylum); //ngành
    const [showPhylum, setShowPhylum] = useState(false);
    const [selectedPhylum, setSelectedPhylum] = useState('');
    const [allPhylum, setPhylum] = useState(1);
    const handleInputClick2 = () => setShowPhylum(true);    //ngành
    useEffect(()=>{
        dispatch(getPhylumAction())
    },[dispatch, allPhylum])
    const HandleListItemClick2 = (value) => {
		setSelectedPhylum(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowPhylum(false);
		setPhylum(value.uuid)
	}
    const clearDataPhylum = () => {
		setSelectedPhylum("");
		setPhylum("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
		}));
	}
    
    const {dataClass, loadingClass} = useSelector((state) => state.classType); //lớp
    const [showClass, setShowClass] = useState(false);
    const [selectedClass, setSelectedClass] = useState('');
    const [allClass, setClass] = useState(1);
    const handleInputClick3 = () => setShowClass(true);    //lớp
    useEffect(()=>{
        dispatch(getClassAction())
    },[dispatch, allClass])
    const HandleListItemClick3 = (value) => {
		setSelectedClass(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowClass(false);
		setClass(value.uuid)
	}
    const clearDataClass = () => {
		setSelectedClass("");
		setClass("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
		}));
	}

    const {dataOrder, loadingOrder} = useSelector((state) => state.order); //bộ
    const [showOrder, setShowOrder] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState('');
    const [allOrder, setOrder] = useState(1);
    const handleInputClick4 = () => setShowOrder(true);    //bộ
    useEffect(()=>{
        dispatch(getOrderAction())
    },[dispatch, allOrder])
    const HandleListItemClick4 = (value) => {
		setSelectedOrder(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowOrder(false);
		setOrder(value.uuid)
	}
    const clearDataOrder = () => {
		setSelectedOrder("");
		setOrder("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
		}));
	}

    const {dataFamily, loadingFamily} = useSelector((state) => state.family); //họ
    const [showFamily, setShowFamily] = useState(false);
    const [selectedFamily, setSelectedFamily] = useState('');
    const [allFamily, setFamily] = useState(1);
    const handleInputClick5 = () => setShowFamily(true);    //họ
    useEffect(()=>{
        dispatch(getFamilyAction())
    },[dispatch, allFamily])
    const HandleListItemClick5 = (value) => {
		setSelectedFamily(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowFamily(false);
		setFamily(value.uuid)
	}
    const clearDataFamily = () => {
		setSelectedFamily("");
		setFamily("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
		}));
	}

    const {dataGenus, loadingGenus} = useSelector((state) => state.genus); //chi
    const [showGenus, setShowGenus] = useState(false);
    const [selectedGenus, setSelectedGenus] = useState('');
    const [allGenus, setGenus] = useState(1);
    const handleInputClick6 = () => setShowGenus(true);    //chi
    useEffect(()=>{
        dispatch(getGenusAction())
    },[dispatch, allGenus])
    const HandleListItemClick6 = (value) => {
		setSelectedGenus(value.ten_khoa_hoc);
		setShowGenus(false);
		setGenus(value.uuid)
	}
    
    const clearDataGenus = () => {
		setSelectedGenus("");
		setGenus("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
		}));
	}


    //tạo mới
    const handleCreateSpecies = (event) => {
		let { id, value } = event.target;
		setDataCreateSpecies((pre) => ({ ...pre, [id]: value, }));
    }

    const handelCreateNewSpecies = async () => {
		const validationErrors = validateForm(dataCreateSpecies);
		if (validationErrors) {
			setErrors({});
			dispatch(createSpeciesAction({ data: dataCreateSpecies, kingdom_id: allKingdom, phylum_id: allPhylum, class_id: allClass, order_id: allOrder, family_id: allFamily, genus_id: allGenus}))
				alert(" thêm dữ liệu thành công");
                navigate("/auth")
		} 
        else  {
			alert("Quyền người dùng không được để trống")
			setErrors(validationErrors);
		}
	} 
       



    return(
        <>
        <HeaderComponent />
        <div className="d-flex">
            <div className="form_species">
                <div className="d-flex pb-3">
                    <Link to='/auth'><FontAwesomeIcon className="back_up" icon="fa-solid fa-arrow-left" /></Link>
                    <h5 className="d-flex align-items-center m-0 ps-4"><b>THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM CẦN ĐƯỢC ƯU TIÊN BẢO VỆ</b></h5>
                </div>
                <div style={{width:'1000px'}}>
                    <h6>I.Thông tin chung về loài</h6>
                    <div className="form_info w-100">
                        <label htmlFor="">Tên <span className="required">*</span></label><br />
                        <input className="input_form" type="text" id='ten' placeholder="Tên" onChange={handleCreateSpecies} />
                        {errors.name !== "" && (<span className="error">{errors.name}</span>)}
                    </div>
                    <div className="d-flex w-80">
                        <div className="form_info w-50">
                            <label htmlFor="">Tên khoa học <span className="required">*</span></label><br />
                            <input className="input_form" type="text" id='ten_khoa_hoc' placeholder="Tên khoa học" onChange={handleCreateSpecies} />
                            {errors.science_name !== "" && (<span className="error">{errors.science_name}</span>)}
                        </div>
                        <div className="form_info w-50">
                            <label htmlFor="">Tên tác giả</label><br />
                            <input className="input_form" type="text" id='ten_tac_gia' placeholder="Tên tác giả" onChange={handleCreateSpecies} />
                        </div>
                    </div>
                    <div className="form_info w-100">
                        <label htmlFor="">Tên địa phương</label><br />
                        <input className="input_form" type="text" id='ten_dia_phuong' placeholder="Tên địa phương" onChange={handleCreateSpecies} />
                    </div>
                    <div className="form_info w-100">
                        <label htmlFor="">Nguồn dữ liệu</label><br />
                        <input className="input_form" type="text" id='nguon_du_lieu' placeholder="Nguồn dữ liệu" onChange={handleCreateSpecies} />
                    </div>
                </div>
                <div className="w-100 pt-3">
                    <div className="d-flex">
                        <h6>II.Phân loại học</h6>
                        <FontAwesomeIcon icon="fa-solid fa-plus" style={{
                            color: "#ffffff", 
                            background:'#f44336', 
                            marginLeft:'12px', 
                            width:'20px', 
                            height:'20px',
                            borderRadius:'50%',
                            padding:'8px',
                            fontSize:'18px'
                        }} />
                    </div>
                    <div className="d-flex">

                        <div className="form_info w-50">
                        <label htmlFor="">Giới <span className="required">*</span></label><br />
                            <input 
                                className="input_form" 
                                type="text" 
                                placeholder="Giới" 
                                onClick={handleInputClick}
                                value={selectedKingdom}
                                onChange={(e) => setSelectedKingdom(e.target.value)} required
                            />
                            {errors.gioi !== "" && (<span className="error">{errors.gioi}</span>)}
                            <div className="list_type" id='kingdom_id' style={{ maxWidth: "425px", display: showKingdom ? 'block' : 'none' }}>
                                {loadingKingdom && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataKingdom && dataKingdom.map((item) => (
											<React.Fragment key={item.uuid}>
												<li className='dataType' onClick={() => HandleListItemClick(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
											</React.Fragment>
										))}
								</ul>
                            </div>
                            <SharedStyle right={22} onClick={clearDataKingdom} />
                        </div>

                        <div className="form_info w-50">
                            <label htmlFor="">Ngành <span className="required">*</span></label><br />
                            <input 
                                className="input_form" 
                                type="text" 
                                placeholder="Ngành" 
                                onClick={handleInputClick2}
                                value={selectedPhylum}
                                onChange={(e) => setSelectedPhylum(e.target.value)} required
                            />
                            {errors.nganh !== "" && (<span className="error">{errors.nganh}</span>)}
                            <div className="list_type" id='phylum_id' style={{ maxWidth: "425px", display: showPhylum ? 'block' : 'none' }}>
                                {loadingPhylum && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataPhylum && dataPhylum.map((item) => (
											<React.Fragment key={item.uuid}>
												<li className='dataType' onClick={() => HandleListItemClick2(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
											</React.Fragment>
										))}
								</ul>
                            </div>
                            <SharedStyle right={22} onClick={clearDataPhylum} />
                        </div>

                        <div className="form_info w-50">
                            <label htmlFor="">Lớp <span className="required">*</span></label><br />
                            <input 
                                className="input_form" 
                                type="text" 
                                placeholder="Lớp" 
                                onClick={handleInputClick3}
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)} required
                            />
                            {errors.lop !== "" && (<span className="error">{errors.lop}</span>)}
                            <div className="list_type" id='class_id' style={{ maxWidth: "425px", display: showClass ? 'block' : 'none' }}>
                                {loadingClass && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataClass && dataClass.map((item) => (
											<React.Fragment key={item.uuid}>
												<li className='dataType' onClick={() => HandleListItemClick3(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
											</React.Fragment>
										))}
								</ul>
                            </div>
                            <SharedStyle right={22} onClick={clearDataClass} />
                        </div>
                    </div>
                    <div className="d-flex">

                        <div className="form_info w-50">
                        <label htmlFor="">Bộ <span className="required">*</span></label><br />
                            <input 
                                className="input_form" 
                                type="text" 
                                placeholder="Bộ" 
                                onClick={handleInputClick4}
                                value={selectedOrder}
                                onChange={(e) => setSelectedOrder(e.target.value)} required
                            />
                            {errors.bo !== "" && (<span className="error">{errors.bo}</span>)}
                            <div className="list_type" id='order_id' style={{ maxWidth: "425px", display: showOrder ? 'block' : 'none' }}>
                                {loadingOrder && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataOrder && dataOrder.map((item) => (
											<React.Fragment key={item.uuid}>
												<li className='dataType' onClick={() => HandleListItemClick4(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
											</React.Fragment>
										))}
								</ul>
                            </div>
                            <SharedStyle right={22} onClick={clearDataOrder} />
                        </div>

                        <div className="form_info w-50">
                            <label htmlFor="">Họ <span className="required">*</span></label><br />
                            <input 
                                className="input_form" 
                                type="text" 
                                placeholder="Họ" 
                                onClick={handleInputClick5}
                                value={selectedFamily}
                                onChange={(e) => setSelectedFamily(e.target.value)} required
                            />
                            {errors.ho !== "" && (<span className="error">{errors.ho}</span>)}
                            <div className="list_type" id='family_id' style={{ maxWidth: "425px", display: showFamily ? 'block' : 'none' }}>
                                {loadingFamily && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataFamily && dataFamily.map((item) => (
											<React.Fragment key={item.uuid}>
												<li className='dataType' onClick={() => HandleListItemClick5(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
											</React.Fragment>
										))}
								</ul>
                            </div>
                            <SharedStyle right={22} onClick={clearDataFamily} />
                        </div>

                        <div className="form_info w-50">
                            <label htmlFor="">Chi <span className="required">*</span></label><br />
                            <input 
                                className="input_form" 
                                type="text" 
                                placeholder="Chi" 
                                onClick={handleInputClick6}
                                value={selectedGenus}
                                onChange={(e) => setSelectedGenus(e.target.value)} required
                            />
                            {errors.chi !== "" && (<span className="error">{errors.chi}</span>)}
                            <div className="list_type" id='genus_id' style={{ maxWidth: "425px", height:'200px', display: showGenus ? 'block' : 'none' }}>
                                {loadingGenus && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0' style={{height:'20px'}}>
										{dataGenus && dataGenus.map((item) => (
											<React.Fragment key={item.uuid}>
												<li className='dataType' onClick={() => HandleListItemClick6(item)}>{item.ten_khoa_hoc}</li>
											</React.Fragment>
										))}
								</ul>
                            </div>
                            <SharedStyle right={22} onClick={clearDataGenus} />
                        </div>
                    </div>
                </div>
                <button className='submit_btn' onClick={handelCreateNewSpecies}>Thêm mới</button>
            </div>
        </div>
        <FooterComponent />
        </>
    )
}

export default CreateNew