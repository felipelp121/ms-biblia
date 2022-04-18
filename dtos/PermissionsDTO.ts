import { OptionString } from "./Options.ts";

export type ComplementarySchoolsPermissionsDTO = {
  can_access_student_functions: boolean;
  can_access_teacher_functions: boolean;
};

export type ComplementaryCellsPermissionsDTO = {
  cell_first_auxiliary: boolean;
  cell_leader: boolean;
  cell_second_auxiliary: boolean;
  cell_supervisor: boolean;
};

export type PermissionsDTO = {
  id: number;
  created_at: string;
  updated_at: string;
  user_organization_connection_id: number;
  can_create_organization_member: boolean;
  can_edit_organization_member: boolean;
  can_edit_complementary_organization_member: boolean;
  can_view_complementary_organization_member: boolean;
  can_make_advanced_search_organization_member: boolean;
  can_edit_complementary_form_organization: boolean;
  can_edit_organization_modules_organization: boolean;
  can_edit_organization_permissions_organization: boolean;
  can_edit_sub_organization: boolean;
  can_edit_organization: boolean;
  can_edit_organization_terms: boolean;
  can_view_reports_organization_member: boolean;
  can_create_visit: boolean;
  can_edit_sub_organization_levels_organization_member: boolean;
  can_edit_status_organization_member: boolean;
  can_edit_organization_member_statuses: boolean;
  can_create_cell: boolean;
  can_edit_cell: boolean;
  can_edit_organization_cell_profiles: boolean;
  can_create_organization_members_import_files: boolean;
  can_view_reports_organization_cell: boolean;
  can_edit_organization_member_supervised: boolean;
  can_view_cell_weekly_report_not_sent: boolean;
  can_view_cell_weekly_reports_in_numbers: boolean;
  can_assign_several_members_sub_organization_in_advanced_search: boolean;
  can_create_report_template_field: boolean;
  can_create_organization_cells_import_files: boolean;
  can_edit_cells_supervisions_functions: boolean;
  can_manage_financial_accounts: boolean;
  can_edit_cult: boolean;
  can_send_email: boolean;
  can_manage_contributions: boolean;
  can_destroy_contributions: boolean;
  can_search_check_contributions: boolean;
  can_view_cell_weekly_reports: boolean;
  can_search_deleted_and_checked_contributions: boolean;
  can_edit_member_relationship: boolean;
  can_edit_cell_members: boolean;
  can_active_view_own_member_contributions: boolean;
  can_destroy_user: boolean;
  has_master_sub_organization_member_permission: boolean;
  can_create_recovery_orders: boolean;
  can_confirm_recovery_order_payments: boolean;
  can_view_recovery_orders: boolean;
  can_view_members_document_files: boolean;
  can_create_and_edit_members_document_files: boolean;
  can_access_indicators_panel: boolean;
  can_manage_new_convert_flow: boolean;
  can_manage_financial_bank_accounts: boolean;
  can_view_suppliers: boolean;
  can_create_suppliers: boolean;
  can_edit_suppliers: boolean;
  can_destroy_suppliers: boolean;
  can_export_cells_to_excel: boolean;
  can_create_expenses: boolean;
  can_edit_expenses: boolean;
  can_cancel_expenses: boolean;
  can_view_expenses: boolean;
  can_settle_expenses: boolean;
  can_unsettle_expenses: boolean;
  can_view_bank_account_transfers: boolean;
  can_create_bank_account_transfers: boolean;
  can_destroy_bank_account_transfers: boolean;
  can_view_bank_account_history_reports: boolean;
  can_view_result_balance_reports: boolean;
  can_view_cash_flow_reports: boolean;
  can_search_deleted_expenses: boolean;
  can_manage_balance_corrections: boolean;
  can_edit_organization_privacy_settings: boolean;
  can_manage_organization_request: boolean;
  can_destroy_recovery_orders: boolean;
  can_send_sms: boolean;
  can_view_financial_summary_reports: boolean;
  can_view_events_per_account_reports: boolean;
  can_view_cost_centers: boolean;
  can_create_cost_centers: boolean;
  can_edit_cost_centers: boolean;
  can_destroy_cost_centers: boolean;
  can_create_account_events_transfers: boolean;
  can_view_contributions_by_member_reports: boolean;
  can_manage_online_contribution_dashboard: boolean;
  can_manage_online_contribution_bank_transfers: boolean;
  can_manage_online_contribution_types: boolean;
  can_manage_all_cell_weekly_reports: boolean;
  can_view_frequency_reports: boolean;
  can_manage_online_recovery_order_dashboard: boolean;
  can_manage_online_recovery_order_bank_transfers: boolean;
  can_manage_projects: boolean;
  can_publish_projects: boolean;
  can_manage_project_categories: boolean;
  can_manage_posts: boolean;
  can_publish_posts: boolean;
  can_manage_post_categories: boolean;
  can_manage_shoppings: boolean;
  can_manage_shopping_approvals_one: boolean;
  can_manage_shopping_approvals_two: boolean;
  can_manage_shopping_quotes: boolean;
  can_manage_shopping_quote_approvals_one: boolean;
  can_manage_shopping_quote_approvals_two: boolean;
  can_manage_purchase_orders: boolean;
  can_manage_shopping_kinds: boolean;
  can_manage_units: boolean;
  can_manage_inventories: boolean;
  can_manage_inventory_outputs: boolean;
  can_manage_inventory_movements: boolean;
  can_manage_shopping_mode: boolean;
  can_manage_shopping_approvals_three: boolean;
  can_manage_messages: boolean;
  can_evangelizing_steps: boolean;
  can_manage_media_contents: boolean;
  can_manage_media_content_items: boolean;
  can_manage_event_all_events: boolean;
  can_manage_member_card: boolean;
  can_manage_youtube_channel: boolean;
  can_manage_schools: boolean;
  can_manage_courses: boolean;
  can_manage_classrooms: boolean;
  can_manage_teachers: boolean;
  can_manage_school_classes: boolean;
  can_manage_auxiliaries: boolean;
  can_view_class_day_reports: boolean;
  can_edit_class_day_reports: boolean;
  can_finish_school_classes: boolean;
  can_view_student_enrollments_indicators: boolean;
  can_view_school_classes_indicators: boolean;
  can_configure_site: boolean;
  can_activate_online_contributions: boolean;
  can_manage_stream_schedules: boolean;
  can_manage_stream_chats: boolean;
  can_manage_prayer_requests: boolean;
  can_view_stream_indicators: boolean;
  can_manage_merge_users: boolean;
  cell_first_auxiliary: boolean;
  cell_leader: boolean;
  cell_second_auxiliary: boolean;
  cell_supervisor: boolean;
  teacher_count: BigInt;
  student_classes_count: BigInt;
  cells_management_status: OptionString;
};
